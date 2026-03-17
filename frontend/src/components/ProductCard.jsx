export const ProductCard = ({ product }) => {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-lg transition-all duration-300">
      <div className="bg-gray-100 h-40 rounded-xl mb-4 flex items-center justify-center text-gray-400">
        {/* Aquí pondremos la imagen cuando la agregues a tu modelo */}
        <span className="text-sm">Sin imagen</span>
      </div>

      <h3 className="text-lg font-bold text-gray-900 mb-1">{product.name}</h3>
      <p className="text-sm text-gray-500 mb-4 line-clamp-2">{product.description}</p>

      <div className="flex justify-between items-center">
        <span className="text-xl font-black text-indigo-600">${product.price}</span>
        <button className="bg-gray-900 text-white text-sm px-4 py-2 rounded-lg hover:bg-black transition-colors font-medium">
          Añadir
        </button>
      </div>
    </div>
  );
}
