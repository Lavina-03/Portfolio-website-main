from fastapi import FastAPI, APIRouter, UploadFile, File, HTTPException
from fastapi.responses import Response
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field
from typing import List
import uuid
from datetime import datetime
import base64
from utils.background_remover import bg_removal_service


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
class StatusCheck(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=datetime.utcnow)

class StatusCheckCreate(BaseModel):
    client_name: str

class BackgroundRemovalResponse(BaseModel):
    success: bool
    image_data: str = None
    file_size_bytes: int = None
    error: str = None

# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {"message": "Hello World"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.dict()
    status_obj = StatusCheck(**status_dict)
    _ = await db.status_checks.insert_one(status_obj.dict())
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    status_checks = await db.status_checks.find().to_list(1000)
    return [StatusCheck(**status_check) for status_check in status_checks]

@api_router.post("/remove-background", response_model=BackgroundRemovalResponse)
async def remove_background(file: UploadFile = File(...)):
    """Remove background from uploaded image"""
    try:
        # Read file data
        file_data = await file.read()
        
        # Validate file size (10MB max)
        if len(file_data) > 10 * 1024 * 1024:
            raise HTTPException(status_code=400, detail="File too large. Max 10MB")
        
        # Call background removal service
        result = await bg_removal_service.remove_background_from_file(
            file_data=file_data,
            filename=file.filename,
            size="auto"
        )
        
        if result['success']:
            # Convert to base64 for response
            image_base64 = base64.b64encode(result['image_data']).decode('utf-8')
            
            return BackgroundRemovalResponse(
                success=True,
                image_data=image_base64,
                file_size_bytes=result['file_size_bytes']
            )
        else:
            raise HTTPException(status_code=400, detail=result['error'])
            
    except HTTPException:
        raise
    except Exception as e:
        logger.exception(f"Error processing image: {str(e)}")
        raise HTTPException(status_code=500, detail=str(e))

@api_router.post("/remove-background-url")
async def remove_background_from_url(request: dict):
    """Remove background from image URL"""
    try:
        image_url = request.get('image_url')
        if not image_url:
            raise HTTPException(status_code=400, detail="image_url is required")
        
        result = await bg_removal_service.remove_background_from_url(
            image_url=image_url,
            size="auto"
        )
        
        if result['success']:
            # Return the processed image directly
            return Response(
                content=result['image_data'],
                media_type="image/png"
            )
        else:
            raise HTTPException(status_code=400, detail=result['error'])
            
    except HTTPException:
        raise
    except Exception as e:
        logger.exception(f"Error processing URL: {str(e)}")
        raise HTTPException(status_code=500, detail=str(e))

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
