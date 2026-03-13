from django.contrib import admin
from .models import Product, Cart, CartItem

@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'price', 'stock')

admin.site.register(Cart)
admin.site.register(CartItem)