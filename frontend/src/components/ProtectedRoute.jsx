import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export const ProtectedRoute = ({ children }) => {
    const { user } = useContext(AuthContext);

    // Si no hay usuario, lo mandamos al login
    if (!user) {
        return <Navigate to="/login" replace />;
    }

    // Si hay usuario, lo dejamos pasar al componente (children)
    return children;
};