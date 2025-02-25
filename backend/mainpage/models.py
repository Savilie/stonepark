from django.db import models

# Create your models here.


class Review(models.Model):
    reviewer_image = models.ImageField(upload_to="reviews/", verbose_name="Фото покупателя")
    reviewer_name = models.CharField(max_length=80, verbose_name="Имя покупателя")
    review_text = models.TextField(verbose_name="Текст отзыва")
    review_stars = models.IntegerField(verbose_name="Количество звезд")

    def __str__(self):
        return self.reviewer_name

    class Meta:
        verbose_name_plural = "Отзывы"
        verbose_name = "Отзыв"
