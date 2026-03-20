import { Route, Routes } from 'react-router-dom';
import { MainLayout } from '../layouts/MainLayout';
import { Home } from '../pages/Home';
import { Store } from '../pages/Store';
import { Login } from '../pages/Login';
import { Cart } from '../pages/Cart';
import { Register } from '../pages/Register';
import { Dashboard } from '../pages/Dashboard';
import { ProtectedRoute } from '../components/ProtectedRoute';
import { UserProfile } from '../pages/UserProfile';


export const AppRouter = () => {
    return (
        <Routes>
            {/* Rutas Públicas  */}
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={< Register />} />

            {/* Rutas con Layout (Con Navbar y Footer) */}
            < Route path='/' element={
                <MainLayout>
                    <Home />
                </MainLayout>
            } />

            {/* Rutas Privadas  */}
            <Route path='/store' element={
                <ProtectedRoute>
                    <MainLayout>
                        <Store />
                    </MainLayout>
                </ProtectedRoute>
            } />

            <Route path='/cart' element={
                <ProtectedRoute>
                    <MainLayout>
                        <Cart />
                    </MainLayout>
                </ProtectedRoute>
            } />
            <Route path='/dashboard' element={
                <ProtectedRoute>
                    <MainLayout>
                        <Dashboard />
                    </MainLayout>
                </ProtectedRoute>
            } />
            <Route path='/userProfile' element={
                <ProtectedRoute>
                    <MainLayout>
                        <UserProfile />
                    </MainLayout>
                </ProtectedRoute>
            } />
        </Routes>
    );
};