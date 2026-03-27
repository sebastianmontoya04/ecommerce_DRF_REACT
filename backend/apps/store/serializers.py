from rest_framework import serializers
from .models import CartItem, Product

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ['id', 'name', 'price', 'description', 'image', 'stock']

class CartItemSerializer(serializers.ModelSerializer):
    #product trae lo que tiene Product(id, name, price)
    product = ProductSerializer(read_only=True)
    #creamos un nuevo campo para enviar el ID de el producto 
    product_id = serializers.PrimaryKeyRelatedField(
        #traemos todos los productos
        queryset=Product.objects.all(),
        #El product_id lo enviamos a product y compara si ese id existe en product
        source='product',
        #lo leemos pero no lo mostramos
        write_only=True
    )
    #incluimos el subtotal de la cantidad de productos
    subtotal = serializers.ReadOnlyField()
    #resultado final
    class Meta:
        model = CartItem
        fields = ['id', 'product', 'product_id', 'quantity', 'subtotal']
        
    def validate(self, data):
        product = data.get('product')
        quantity = data.get('quantity')
        
        if product and quantity:
            if quantity > product.stock:
                raise serializers.ValidationError(
                    f"No puedes pedir {quantity} unidades. Solo quedan {product.stock} en stock"
                )
        return data