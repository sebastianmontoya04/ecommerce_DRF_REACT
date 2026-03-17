import React from 'react'

export const Navbar = () => {
    return (
        <nav className="bg-white border-b border-gray-200 py-4">
            <div className="container mx-auto px-4 flex justify-between items-center">
                <div className="text-2xl font-bold text-indigo-600">Vertex tech</div>
                <div className="flex space-x-6 text-gray-600 font-medium">
                    <a href="/" className="hover:text-indigo-600">Inicio</a>
                    <a href="/store" className="hover:text-indigo-600">Tienda</a>
                    <a href="/cart" className="hover:text-indigo-600">Carrito</a>
                </div>
                <button className="bg-gray-900 text-white px-5 py-2 rounded-lg hover:bg-gray-800">
                    Login
                </button>
            </div>
        </nav>
    );
}
