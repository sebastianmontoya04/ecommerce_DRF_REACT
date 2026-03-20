import { AuthProvider } from './context/AuthContext'
import { AppRouter } from './routes/AppRouter'
import { BrowserRouter } from 'react-router-dom'
import './index.css'


export const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppRouter />
      </AuthProvider >
    </BrowserRouter>
  )
}
