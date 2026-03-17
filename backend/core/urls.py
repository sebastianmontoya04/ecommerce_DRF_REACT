from rest_framework_simplejwt.views import (
    TokenObtainPairView, TokenRefreshView,
)
from django.contrib import admin
from django.urls import path, include
from apps.accounts.views import get_user_profile


urlpatterns = [
    path('admin/', admin.site.urls),
    
    #ruta para el registro
    path('api/registro/', include('apps.accounts.urls')),
    
    #ruta para la tienda
    path('api/store/', include('apps.store.urls')),
    
    #ruta para el login
    path('api/login/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh', TokenRefreshView.as_view(), name='token_refresh'),
    
    path('get_profile/', get_user_profile ),
    
    
]
