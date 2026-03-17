import React from 'react'

export const Cart = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Tu Carrito</h2>
      
      <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
        <div className="space-y-4">
          {/* Fila de producto (Esto se mapeará luego) */}
          <div className="flex justify-between items-center border-b pb-4">
            <div>
              <h4 className="font-semibold text-gray-900">Teclado Mecánico</h4>
              <p className="text-sm text-gray-500">Cantidad: 1</p>
            </div>
            <span className="font-bold text-gray-900">$89.99</span>
          </div>
        </div>
        
        <div className="mt-6 flex justify-between items-center border-t pt-4">
          <span className="text-lg font-bold text-gray-900">Total</span>
          <span className="text-2xl font-black text-indigo-600">$89.99</span>
        </div>
        
        <button className="w-full mt-6 bg-indigo-600 text-white py-3 rounded-xl font-bold hover:bg-indigo-700">
          Finalizar Compra
        </button>
      </div>
    </div>
  );
}
