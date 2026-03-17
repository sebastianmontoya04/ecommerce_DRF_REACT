import { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoadingScreen } from '../components/LoadingScreen';
import api from '../api/api';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    // Efecto para que la sesión siga al recargar la página
    useEffect(() => {
        const checkUser = async () => {
            const token = localStorage.getItem('access_token');
            if (token) {
                try {
                    // Si hay token, pedimos los datos reales del perfil al backend
                    const { data } = await api.get('get_profile/');
                    setUser(data);
                } catch (error) {
                    // Si el token es inválido o expiró, limpiamos el almacenamiento
                    console.error("Token inválido o expirado");
                    localStorage.removeItem('access_token');
                    localStorage.removeItem('refresh_token');
                    setUser(null);
                }
            }
            setLoading(false);
        };

        checkUser();
    }, []);

    const login = async (username, password) => {
        try {
            // 1. Iniciamos sesión y obtenemos los tokens
            const response = await api.post('login/', { username, password });
            localStorage.setItem('access_token', response.data.access);
            localStorage.setItem('refresh_token', response.data.refresh);

            // 2. pedimos los datos del perfil del usuario
            const { data } = await api.get('get_profile/');

            // 3. Guardamos los datos completos en el estado global
            setUser(data);
            //redireccionamos
            navigate('/dashboard');
            return { success: true };
        } catch (error) {
            console.error("Error en login:", error);
            // Extraemos el mensaje de error si el backend lo envía, sino uno genérico
            const errorMsg = error.response?.data?.detail || "Credenciales inválidas";
            return { success: false, error: errorMsg };
        }
    };

    const logout = () => {
        // Limpiamos tokens y estado del usuario
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        setUser(null);
        navigate('/login');
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, loading }}>
            {/* Solo renderizamos la app cuando loading sea false */}
            {!loading 
            ? LoadingScreen 
            : children}
        </AuthContext.Provider>
    );
};