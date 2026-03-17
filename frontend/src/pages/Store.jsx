import { ProductCard } from '../components/ProductCard';

export const Store = () => {
  // Datos de prueba (luego los reemplazaremos por los de tu API)
  const products = [
    { id: 1, name: 'Teclado Mecánico RGB', price: '89.99', description: 'Switch azul, ultra sensible' },
    { id: 2, name: 'Mouse Inalámbrico', price: '45.50', description: '16000 DPI, batería de larga duración' },
    { id: 3, name: 'Audífonos Noise Cancelling', price: '120.00', description: 'Sonido envolvente, 30h de batería' },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 tracking-tight">Catálogo de Vertex Tech</h2>

      {/* Grid responsivo */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};