import asyncio
import aiohttp
import os
import sys
import json

async def process_image():
    """Process Lavina's photo to remove background"""
    
    image_url = "https://customer-assets.emergentagent.com/job_3ba0a958-e1d7-4508-9420-d0434ac12e37/artifacts/ydg0zueq_lavina%20photo.jpg"
    
    try:
        async with aiohttp.ClientSession() as session:
            # Call local backend API with JSON body
            payload = {'image_url': image_url}
            
            async with session.post(
                'http://localhost:8001/api/remove-background-url',
                json=payload,
                timeout=aiohttp.ClientTimeout(total=60)
            ) as response:
                
                if response.status == 200:
                    image_data = await response.read()
                    
                    # Save the processed image
                    output_path = '/app/frontend/public/lavina-no-bg.png'
                    with open(output_path, 'wb') as f:
                        f.write(image_data)
                    
                    print(f"✅ Background removed successfully!")
                    print(f"✅ Saved to: {output_path}")
                    print(f"✅ File size: {len(image_data)} bytes")
                    return True
                else:
                    error = await response.text()
                    print(f"❌ Error: {response.status} - {error}")
                    return False
                    
    except Exception as e:
        print(f"❌ Error processing image: {str(e)}")
        return False

if __name__ == "__main__":
    result = asyncio.run(process_image())
    sys.exit(0 if result else 1)
