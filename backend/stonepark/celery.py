import os
from celery import Celery

# Устанавливаем переменную окружения для настроек Django
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'stonepark.settings')

# Создаем экземпляр Celery
app = Celery('stonepark')

# Загружаем настройки из файла settings.py
app.config_from_object('django.conf:settings', namespace='CELERY')

# Автоматически находим и регистрируем задачи в приложениях Django
app.autodiscover_tasks()