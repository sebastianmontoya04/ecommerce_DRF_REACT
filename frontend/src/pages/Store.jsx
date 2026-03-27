import { ProductCard } from '../components/ProductCard';
import { useContext } from "react"
import { CartContext } from '../context/CartContext'
import { Toaster } from 'react-hot-toast';

export const Store = () => {
  const { products = [] } = useContext(CartContext)

  return (
    <div className="max-w-6xl mx-auto">
      <Toaster />
      <h2 className="text-3xl font-bold text-gray-900 mb-8 tracking-tight">Catálogo de VertexTech</h2>

      {/* Grid responsivo */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products?.length === 0 ? (
          <p className="font-medium text-lg">Tu carrito está vacío</p>
        ) : (
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        )}
      </div>
    </div>
  );
};