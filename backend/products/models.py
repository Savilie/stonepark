from django.db import models
from .validators import validate_image_extension

# Create your models here.


class Category(models.Model):
    name = models.CharField(max_length=200, verbose_name="Имя категории")

    def __str__(self):
        return self.name

    class Meta:
        verbose_name_plural = 'Категории'
        verbose_name = "Категория"


class Product(models.Model):
    name = models.CharField(max_length=200, verbose_name="Имя товара")

    short_description = models.CharField(max_length=200, verbose_name="Краткое описание")
    full_description = models.TextField(max_length=3000, verbose_name="Полное описание")

    category = models.ForeignKey(Category, on_delete=models.CASCADE, verbose_name="Категория")

    def __str__(self):
        return self.name

    class Meta:
        verbose_name_plural = 'Товары'
        verbose_name = "Товар"


class ProductImage(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='images',
                                verbose_name="Товар", validators=[validate_image_extension])
    image = models.ImageField(upload_to='product_images/', verbose_name="Фото")

    def __str__(self):
        return f"Image for {self.product.name}"

    class Meta:
        verbose_name_plural = 'Фотографии'
        verbose_name = "Фотография"


class Bid(models.Model):
    name = models.CharField(max_length=255, verbose_name="Имя заказчика")
    number = models.CharField(max_length=20, verbose_name="Номер телефона")
    comment = models.TextField(max_length=500, verbose_name="Комментарий к заказу")

    def __str__(self):
        return self.name

    class Meta:
        verbose_name_plural = "Заказы"
        verbose_name = "Заказ"
