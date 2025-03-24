cd /app/backend

set -a  # Экспортировать все переменные
source .env
set +a  # Отключить автоматический экспорт

python3 manage.py migrate --no-input


mkdir "static"

python3 manage.py collectstatic

# Создаем суперпользователя, если переменные окружения заданы
if [ -n "$ADMIN_FIRST_NAME" ] && [ -n "$ADMIN_USER" ] && [ -n "$ADMIN_PASSWORD" ]; then
  echo "Creating superuser..."
  python3 manage.py createsuperuser --no-input \
    --first_name "$ADMIN_FIRST_NAME" \
    --second_name "$ADMIN_SECOND_NAME" \
    --email "$ADMIN_USER"
  echo "from django.contrib.auth import get_user_model; User = get_user_model(); user = User.objects.get(first_name='$ADMIN_FIRST_NAME'); user.set_password('$ADMIN_PASSWORD'); user.save()" | python3 manage.py shell
else
  echo "Superuser credentials not provided. Skipping superuser creation."
fi

gunicorn --workers=4 --bind 0.0.0.0:8000 stonepark.wsgi &

celery -A stonepark worker --loglevel=info
