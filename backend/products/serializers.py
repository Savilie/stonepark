from rest_framework import serializers

from .models import Product, Category, Bid, ProductImage


class ProductImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductImage
        fields = ['image']  # Возвращаем только поле image


class ProductSerializer(serializers.ModelSerializer):
    images = ProductImageSerializer(many=True, read_only=True)  # Вложенный сериализатор для изображений

    class Meta:
        model = Product
        fields = ['id', 'name', 'short_description', 'full_description', 'category', 'images']


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'


class BidSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bid
        fields = '__all__'
