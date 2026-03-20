import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="bg-white border-b border-gray-100 py-4 px-6 flex justify-between items-center shadow-sm">
      <Link to="/" className="text-2xl font-black text-indigo-600 tracking-tighter">
        VERTEX<span className="text-gray-900">TECH</span>
      </Link>

      <div className="space-x-8 font-medium text-gray-600 flex items-center">
        <Link to="/store" className="hover:text-indigo-600 transition-colors">Tienda</Link>
        
        {user ? (
          <>
            <Link to="/cart" className="hover:text-indigo-600">Mi Carrito</Link>
            <Link to="/userProfile" className="hover:text-indigo-600">Mi Perfil</Link>
            <button 
              onClick={logout}
              className="bg-red-50 text-red-600 px-4 py-2 rounded-xl hover:bg-red-100 transition-all font-bold"
            >
              Salir
            </button>
          </>
        ) : (
          <Link 
            to="/login" 
            className="bg-gray-900 text-white px-6 py-2 rounded-xl hover:bg-black transition-all font-bold shadow-lg shadow-gray-200"
          >
            Entrar
          </Link>
        )}
      </div>
    </nav>
  );
};