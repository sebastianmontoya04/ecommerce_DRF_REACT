import { AuthContext } from "../context/AuthContext";
import { useContext, useState } from "react";
import toast, { Toaster } from 'react-hot-toast'

export const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const { register } = useContext(AuthContext);

  const handleRegister = async (e) => {
    e.preventDefault()
    setLoading(true)

    const result = await register(username.trim(), password, email.trim())
    if (!result.success) {
      toast.error(result.error || "No se pudo crear la cuenta. Revisa los datos")
      setLoading(false)
      return;
    }
    toast.success('Cuenta registrada con exito!')

  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <Toaster position="top-center" />
      <div className="w-full max-w-sm bg-white p-8 rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100">

        {/* Header del formulario */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-black text-gray-900 tracking-tight">Bienvenido</h2>
          <p className="text-gray-500 text-sm mt-2">Crea tu cuenta de Vertex Tech</p>
        </div>

        {/* Inputs con estilo moderno */}
        <form className="space-y-4" onSubmit={handleRegister}>

          <div>
            <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1 ml-1">Usuario</label>
            <input
              type="text"
              className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all"
              placeholder="Tu usuario"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1 ml-1">Contraseña</label>
            <input
              type="password"
              className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1 ml-1">Email</label>
            <input
              type="email"
              className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all"
              placeholder="Ingresa tu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <button className="w-full py-3 mt-4 bg-gray-900 text-white rounded-xl font-bold hover:bg-black transition-all transform hover:scale-[1.02] active:scale-95 shadow-lg shadow-gray-300"
            disabled={loading}>
            {loading ? "verificando" : "crear cuenta"}
          </button>
        </form>

        <p className="text-center text-sm text-gray-400 mt-6">
          ¿Ya tienes una cuenta? <a href="/Login" className="text-indigo-600 font-semibold hover:underline">Iniciar sesion</a>
        </p>
      </div>
    </div>
  );
}
