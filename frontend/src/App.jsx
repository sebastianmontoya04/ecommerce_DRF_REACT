import { AuthProvider } from './context/AuthContext'
import { AppRouter } from './routes/AppRouter'
import './index.css'


export const App = () => {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider >
  )
}
