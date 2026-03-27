import { AuthProvider } from './context/AuthContext'
import { AppRouter } from './routes/AppRouter'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import { CartProvider } from './context/CartContext'


export const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <CartProvider>
          <AppRouter />
        </CartProvider>
      </AuthProvider >
    </BrowserRouter>
  )
}
