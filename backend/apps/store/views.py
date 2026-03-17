from rest_framework import viewsets, permissions
from .models import Cart, CartItem, Product
from .serializers import CartItemSerializer, ProductSerializer
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import action

class CartItemViewSet(viewsets.ModelViewSet):
    serializer_class = CartItemSerializer
    #nos aseguramos que el usuario este logueado(tenga un token)
    permission_classes = [permissions.IsAuthenticated]
    
    #buscamos todos los productos que hay en el carrito de el usuario 
    def get_queryset(self):
        return CartItem.objects.filter(cart__user=self.request.user)
     
    # Buscamos el carrito del usuario o lo creamos si no existe get_or_create devuelve una tupla: (objeto, creado_o_no)
    def perform_create(self, serializer):
    # Usamos _ para ignorar el segundo valor (no nos importa si se acaba de crear).
        cart, _ = Cart.objects.get_or_create(user=self.request.user)
    #Guardamos el serializer inyectándole el carrito que encontramos.
        serializer.save(cart=cart)
        
    # Esta acción creará la ruta: /api/store/cart-items/clear-cart/
    @action(detail=False, methods=['DELETE'])
    def clear_cart(self, request):
        # Filtramos solo los items del usuario logueado
        cart_items = self.get_queryset()
        # Eliminamos todos los resultados del QuerySet
        cart_items.delete()
        
        # Respondemos con un 204 (No Content) porque el carrito quedó vacío
        return Response(status=status.HTTP_204_NO_CONTENT)
    
#Este ViewSet es ReadOnly porque los clientes no crean productos, solo los ven.
class ProductViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    permission_classes = [permissions.AllowAny]