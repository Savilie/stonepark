from django.contrib import admin
from .models import Category, Product, ProductImage, Bid


class ProductImageInline(admin.TabularInline):  # или admin.StackedInline
    model = ProductImage
    extra = 1  # Количество пустых форм для добавления изображений


class ProductInline(admin.TabularInline):
    model = Product
    extra = 1


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    inlines = [ProductImageInline]


@admin.register(ProductImage)
class ProductImageAdmin(admin.ModelAdmin):
    pass


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    inlines = [ProductInline]


@admin.register(Bid)
class BidAdmin(admin.ModelAdmin):
    pass
