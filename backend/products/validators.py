from django.core.exceptions import ValidationError
from PIL import Image
from pillow_heif import register_heif_opener

# Регистрируем поддержку HEIC в Pillow
register_heif_opener()

def validate_image_extension(value):
    """Проверяет, что файл - допустимое изображение (включая HEIC)."""
    try:
        img = Image.open(value)
        img.verify()  # Проверяем целостность файла
    except Exception as e:
        raise ValidationError(f"Недопустимый формат изображения: {str(e)}")