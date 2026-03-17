import React from 'react'

export const Home = () => {
  return (
    <div className="text-center py-20">
      <h1 className="text-5xl font-bold text-gray-900 mb-6">Bienvenido a nuestra tienda</h1>
      <p className="text-xl text-gray-600 mb-8">La mejor tecnología al mejor precio.</p>
      <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700">
        Ir a la tienda
      </button>
    </div>
  );
}
