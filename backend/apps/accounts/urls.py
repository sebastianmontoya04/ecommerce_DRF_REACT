from django.urls import path
from .views import RegisterView, UpdateProfileView

urlpatterns = [
    path('register/', RegisterView.as_view(), name='register'),
    path('updateProfile/', UpdateProfileView.as_view(), name='updateProfile')
]