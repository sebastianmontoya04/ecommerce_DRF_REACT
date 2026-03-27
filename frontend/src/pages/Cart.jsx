import { useContext } from "react";
import { Trash2, Plus, Minus, ShoppingBag } from "lucide-react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import { Toaster } from "react-hot-toast";

export const Cart = () => {
  const { cartItems = [], updateQuantity, removeItem } = useContext(CartContext);

  // Calculamos el total sumando los subtotales de cada item
  const total = cartItems.reduce((acc, item) => acc + (parseFloat(item.subtotal) || 0), 0);

  return (
    <div className="min-h-screen bg-gray-50 px-4">
      <Toaster />
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-black text-gray-900 mb-8 tracking-tight">Mi carrito</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Lista de Productos */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems?.length === 0 ? (
              <div className="bg-white rounded-[2.5rem] border border-dashed border-gray-300 py-20 flex flex-col items-center justify-center text-gray-400">
                <ShoppingBag size={48} className="mb-4 opacity-20" />
                <p className="font-medium text-lg">Tu carrito está vacío</p>
                <Link
                  to="/dashboard"
                  className="mt-4 text-indigo-600 font-bold hover:underline"
                >
                  Ir a la tienda
                </Link>
              </div>
            ) : (
              cartItems.map((item) => (
                <div key={item.id} className="bg-white p-5 rounded-[2rem] border border-gray-100 shadow-sm flex items-center justify-between animate-in fade-in slide-in-from-bottom-2">
                  <div className="flex items-center space-x-4">
                    <div className="h-20 w-20 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 font-bold text-2xl shadow-inner">
                      <img src={item.product?.image} alt={item.product?.name} />
                    </div>
                    <div>
                      {/* Corregido: Accedemos a item.product.name según tu serializer */}
                      <h3 className="font-bold text-gray-900 leading-tight">
                        {item.product?.name || "Producto"}
                      </h3>
                      <p className="text-sm text-gray-400 font-medium">
                        ${item.product?.price || 0}
                      </p>
                      <p className="text-indigo-600 font-black text-sm mt-1">
                        Subtotal: ${item.subtotal}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col items-end space-y-3">
                    <div className="flex items-center bg-gray-50 rounded-xl p-1 border border-gray-100 shadow-inner">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-1.5 hover:bg-white hover:shadow-sm rounded-lg transition-all text-gray-400 active:scale-90 cursor-pointer"
                      >
                        <Minus size={16} />
                      </button>
                      <span className="px-4 font-black text-gray-900 min-w-[40px] text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1, item.product?.stock)}
                        className="p-1.5 hover:bg-white hover:shadow-sm rounded-lg transition-all text-indigo-600 active:scale-90 cursor-pointer"
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-red-300 hover:text-red-500 transition-colors p-1 cursor-pointer"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Resumen de Compra */}
          <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-xl shadow-gray-200/40 h-fit sticky top-8">
            <h2 className="text-xl font-black text-gray-900 mb-6 uppercase tracking-wider">Resumen</h2>
            <div className="space-y-4 mb-8">
              <div className="flex justify-between text-gray-500 font-medium">
                <span>Productos</span>
                <span className="text-gray-900 font-bold">{cartItems?.length || 0}</span>
              </div>
              <div className="flex justify-between text-gray-500 font-medium">
                <span>Envío</span>
                <span className="text-green-500 font-bold text-xs uppercase bg-green-50 px-2 py-1 rounded-md">Gratis</span>
              </div>
              <div className="flex justify-between text-1xl font-black text-gray-900 pt-6 border-t border-gray-50 mt-4">
                <span>TOTAL</span>
                <span>${total.toLocaleString()}</span>
              </div>
            </div>
            <button
              disabled={cartItems?.length === 0}
              className="w-full py-4 bg-gray-900 text-white rounded-2xl font-bold hover:bg-black transition-all shadow-lg shadow-gray-200 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
            >
              Finalizar Compra
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};