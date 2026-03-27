import { createContext, useEffect, useState } from 'react';
import { api } from '../api/api';
import toast from 'react-hot-toast'

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [cartItems, setCartItems] = useState([])

    // Cargar productos del servidor al iniciar
    const fetchProducts = async () => {
        try {
            const res = await api.get('store/products/');
            // Llenamos el catálogo
            setProducts(res.data);
        } catch (err) { console.error("Error catálogo", err); }
    };

    // cargar carrito 
    const fetchCart = async () => {
        try {
            const res = await api.get('store/cart-items/');
            setCartItems(res.data);
        } catch (err) { console.error("Error carrito", err); }
    };

    // añadir al carrito
    const addToCart = async (productId, quantity = 1) => {
        // Evita llamadas accidentales del useEffect
        if (!productId) return;
        try {
            await api.post('store/cart-items/', { product_id: productId, quantity });
            // Una vez guardado en la DB, pedimos la lista actualizada
            fetchCart();
            toast.success('Producto agregado al carrito')
        } catch (err) { console.error("Error al añadir", err.response?.data); }
    };

    const removeItem = async (itemId) => {
        try {
            await api.delete(`store/cart-items/${itemId}/`);
            fetchCart();
            toast.success("Producto eliminado");
        } catch (err) {
            console.error("Error al eliminar item", err);
        }
    };

    const updateQuantity = async (itemId, newQuantity, stock) => {
        // Si la cantidad baja de 1 llamamos a eliminar
        if (newQuantity < 1) {
            return removeItem(itemId);
        }
        if (newQuantity > stock) {
            return toast.error('Producto agotado')
        }

        try {
            // Usamos PATCH para actualizar solo la cantidad en el item específico
            // La URL usa el ID del CartItem, no del producto
            await api.patch(`store/cart-items/${itemId}/`, {
                quantity: newQuantity
            });


            // Refrescamos el estado local para que el subtotal y total se actualicen
            fetchCart();
        } catch (err) {
            console.error("Error al actualizar cantidad", err);
            toast.error("No se pudo actualizar el stock");
        }
    };

    useEffect(() => {
        const token = localStorage.getItem('access_token')
        if (token) {
            fetchProducts()
            fetchCart()
        }
    }, [])

    return (
        <CartContext.Provider value={{ products, addToCart, fetchCart, updateQuantity, removeItem, cartItems }}>
            {children}
        </CartContext.Provider>
    );
};