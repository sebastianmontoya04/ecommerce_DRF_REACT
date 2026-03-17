import { Route, Routes } from 'react-router-dom';
import { MainLayout } from '../layouts/MainLayout';
import { Home } from '../pages/Home';
import { Store } from '../pages/Store';
import { Login } from '../pages/Login';
import { Cart } from '../pages/Cart';
import { Register } from '../pages/Register';


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

            <Route path='/store' element={
                <MainLayout>
                    <Store />
                </MainLayout>
            } />

            <Route path='/cart' element={
                <MainLayout>
                    <Cart />
                </MainLayout>
            } />
        </Routes>
    );
};