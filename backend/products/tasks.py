from celery import shared_task

from django.core.mail import send_mail
from django.conf import settings

from django.utils import timezone

from django.template.loader import render_to_string
from django.utils.html import strip_tags

current_time_moscow = timezone.now()



@shared_task
def send_email_async(name, number, info):

    html_message = render_to_string('quiz/quiz.html', {'number': number, 'name': name, 'info': info })
    plain_message = strip_tags(html_message)
    try:
        send_mail(
            subject=f"Новая заявка от {current_time_moscow}",
            message=plain_message,
            html_message=html_message,
            from_email=settings.EMAIL_HOST_USER,  # Отправитель
            recipient_list=settings.EMAIL_HOST_USER,  # Список получателей
            fail_silently=False,
        )
    except Exception as e:
        return e
