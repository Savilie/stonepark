from django.core.exceptions import ValidationError
from PIL import Image
from io import BytesIO
from pillow_heif import register_heif_opener

register_heif_opener()

def validate_image_extension(value):
    """Проверяет валидность изображения (включая HEIC)"""
    
    # Если value - это ID существующего файла (при редактировании в админке)
    if isinstance(value, int):
        return  # Пропускаем проверку для существующих файлов
    
    try:
        # Если это новый файл
        if hasattr(value, 'temporary_file_path'):  # Для временных файлов
            img = Image.open(value.temporary_file_path())
        else:  # Для InMemoryUploadedFile
            img = Image.open(BytesIO(value.read()))
        
        img.verify()  # Проверяем целостность файла
        
        # Дополнительная проверка формата (опционально)
        if img.format.lower() not in ['jpeg', 'png', 'heic', 'heif']:
            raise ValidationError("Неподдерживаемый формат изображения")
            
    except Exception as e:
        raise ValidationError(f"Недопустимый формат изображения: {str(e)}")
