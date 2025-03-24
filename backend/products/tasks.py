from celery import shared_task

from django.core.mail import send_mail
from django.conf import settings

from django.utils import timezone

from django.template.loader import render_to_string
from django.utils.html import strip_tags


@shared_task
def send_email_async(name, number, info):
    
    current_time = timezone.localtime(timezone.now())

    html_message = render_to_string('bids/bid.html', {'number': number, 'name': name, 'info': info })
    plain_message = strip_tags(html_message)
    try:
        recipient_list = [settings.EMAIL_HOST_USER]
        send_mail(
            subject=f"Новая заявка от {current_time}",
            message=plain_message,
            html_message=html_message,
            from_email=settings.EMAIL_HOST_USER,  # Отправитель
            recipient_list=recipient_list,  # Список получателей
            fail_silently=False,
        )
    except Exception as e:
        return {'status': 'error', 'message': str(e)}
