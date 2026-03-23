import aiohttp
import io
import os
import logging
from PIL import Image
from dotenv import load_dotenv
from pathlib import Path

# Load environment variables
ROOT_DIR = Path(__file__).parent.parent
load_dotenv(ROOT_DIR / '.env')

logger = logging.getLogger(__name__)

class BackgroundRemovalService:
    """Service for removing backgrounds using Remove.bg API"""
    
    def __init__(self):
        self.api_key = os.environ.get('REMOVEBG_API_KEY')
        self.api_url = "https://api.remove.bg/v1.0/removebg"
        logger.info(f"BackgroundRemovalService initialized with API key: {'*' * 10}{self.api_key[-4:] if self.api_key else 'NOT SET'}")
    
    async def remove_background_from_file(
        self,
        file_data: bytes,
        filename: str,
        size: str = "auto"
    ) -> dict:
        """Remove background from uploaded file"""
        
        if not self.api_key:
            logger.error("Remove.bg API key not configured")
            return {
                'success': False,
                'error': 'API key not configured'
            }
        
        try:
            async with aiohttp.ClientSession() as session:
                form = aiohttp.FormData()
                form.add_field(
                    'image_file',
                    io.BytesIO(file_data),
                    filename=filename,
                    content_type='image/jpeg'
                )
                form.add_field('size', size)
                
                headers = {'X-Api-Key': self.api_key}
                
                async with session.post(
                    self.api_url,
                    data=form,
                    headers=headers,
                    timeout=aiohttp.ClientTimeout(total=60)
                ) as response:
                    
                    if response.status == 200:
                        image_data = await response.read()
                        return {
                            'success': True,
                            'image_data': image_data,
                            'file_size_bytes': len(image_data)
                        }
                    elif response.status == 429:
                        return {
                            'success': False,
                            'error': 'Rate limited. Please try again later.'
                        }
                    elif response.status == 403:
                        return {
                            'success': False,
                            'error': 'Invalid API key or insufficient credits'
                        }
                    else:
                        error_text = await response.text()
                        logger.error(f"API error {response.status}: {error_text}")
                        return {
                            'success': False,
                            'error': f'API error: {response.status}'
                        }
                        
        except Exception as e:
            logger.error(f"Background removal error: {str(e)}")
            return {
                'success': False,
                'error': str(e)
            }
    
    async def remove_background_from_url(
        self,
        image_url: str,
        size: str = "auto"
    ) -> dict:
        """Remove background from image URL"""
        
        if not self.api_key:
            return {
                'success': False,
                'error': 'API key not configured'
            }
        
        try:
            async with aiohttp.ClientSession() as session:
                form = aiohttp.FormData()
                form.add_field('image_url', image_url)
                form.add_field('size', size)
                
                headers = {'X-Api-Key': self.api_key}
                
                async with session.post(
                    self.api_url,
                    data=form,
                    headers=headers,
                    timeout=aiohttp.ClientTimeout(total=60)
                ) as response:
                    
                    if response.status == 200:
                        image_data = await response.read()
                        return {
                            'success': True,
                            'image_data': image_data,
                            'file_size_bytes': len(image_data)
                        }
                    else:
                        error_text = await response.text()
                        return {
                            'success': False,
                            'error': f'API error: {response.status}'
                        }
                        
        except Exception as e:
            logger.error(f"Background removal error: {str(e)}")
            return {
                'success': False,
                'error': str(e)
            }

# Create singleton instance
bg_removal_service = BackgroundRemovalService()
