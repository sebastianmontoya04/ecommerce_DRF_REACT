import React from 'react'

export const Dashboard = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-900">Mi Perfil</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <h3 className="text-lg font-semibold mb-2">Datos de cuenta</h3>
          <p className="text-gray-600">Usuario: @tu_usuario</p>
          <p className="text-gray-600">Email: usuario@vertex.tech</p>
        </div>
        
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <h3 className="text-lg font-semibold mb-2">Estado del Carrito</h3>
          <p className="text-gray-600">Tienes 3 artículos pendientes</p>
        </div>
      </div>
    </div>
  );
}
