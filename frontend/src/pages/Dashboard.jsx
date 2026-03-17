import React from 'react'

export const Dashboard = () => {
  return (
    <div className="max-w-6xl mx-auto animate-fadeIn">
      {/* Header de Bienvenida */}
      <header className="mb-10">
        <h1 className="text-4xl font-black text-gray-900 tracking-tight">Panel de Control</h1>
        <p className="text-gray-500 mt-2 text-lg">Hola, <span className="text-indigo-600 font-semibold">@usuario</span>. Gestiona tus pedidos y cuenta aquí.</p>
      </header>

      {/* Grid de Resumen */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {/* Card: Pedidos Recientes */}
        <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
          <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center mb-4 text-indigo-600">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="box-archive"></path></svg>
          </div>
          <h3 className="text-xl font-bold text-gray-900">Mis Pedidos</h3>
          <p className="text-gray-500 text-sm mt-1">Has realizado 5 compras este mes.</p>
        </div>

        {/* Card: Items en Carrito */}
        <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
          <div className="w-12 h-12 bg-green-50 rounded-2xl flex items-center justify-center mb-4 text-green-600">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="shopping-cart"></path></svg>
          </div>
          <h3 className="text-xl font-bold text-gray-900">Carrito Actual</h3>
          <p className="text-gray-500 text-sm mt-1">Tienes 2 accesorios listos para pago.</p>
        </div>

        {/* Card: Seguridad */}
        <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
          <div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center mb-4 text-orange-600">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="key"></path></svg>
          </div>
          <h3 className="text-xl font-bold text-gray-900">Seguridad</h3>
          <p className="text-gray-500 text-sm mt-1">Tu cuenta está protegida.</p>
        </div>
      </div>

      {/* Sección de Actividad Reciente */}
      <div className="bg-white border border-gray-100 rounded-3xl p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Últimas Compras</h3>
        <div className="text-center py-10 border-2 border-dashed border-gray-100 rounded-2xl">
          <p className="text-gray-400">Aquí aparecerá el historial de tus compras tecnológicas.</p>
        </div>
      </div>
    </div>
  );
}
