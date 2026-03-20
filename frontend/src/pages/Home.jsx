import { Link } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import { useContext } from 'react';

export const Home = () => {
  const { user } = useContext(AuthContext)
  return (
    <div className="text-center py-20">
      <h1 className="text-5xl font-bold text-gray-900 mb-6">Bienvenido a nuestra tienda</h1>
      <p className="text-xl text-gray-600 mb-8">La mejor tecnología al mejor precio.</p>
      {user
        ?
        <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700">
          <Link to="/dashboard">Ir a la tienda</Link>
        </button>
        :
        <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700">
          <Link to="/login">Ingresar</Link>
        </button>
        }
    </div>
  );
}
