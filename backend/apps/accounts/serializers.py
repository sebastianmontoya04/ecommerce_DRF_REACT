from django.contrib.auth.models import User
from rest_framework import serializers

class RegisterSerializer(serializers.ModelSerializer):
    # Definimos el password como write_only para que nunca se envíe de vuelta en un JSON
    password = serializers.CharField(write_only = True)
    
    class Meta:
        model = User
        fields = ['username', 'email', 'password', 'first_name', 'last_name']
        
    def create(self, validate_data):
        user = User.objects.create_user(
            username=validate_data['username'],
            password=validate_data['password'],
            email=validate_data.get('email', ''),
            first_name=validate_data.get('first_name', ''),
            last_name=validate_data.get('last_name', ''),
        )
        return user
    
class UpdateProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'email']
        
        
    def update(self, instance, validated_data):
        instance.username = validated_data.get('username', instance.username)
        instance.email = validated_data.get('email', instance.email)
        instance.save()
        return instance

    
        