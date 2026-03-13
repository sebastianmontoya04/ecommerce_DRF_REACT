from rest_framework.routers import DefaultRouter
from .views import CartItemViewSet
from django.urls import path, include

router = DefaultRouter()

router.register(r'cart-items', CartItemViewSet, basename='cart-items')

urlpatterns = [
    path('', include(router.urls))
]