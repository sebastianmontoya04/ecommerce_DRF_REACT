

export const Login = () => {

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-sm bg-white p-8 rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100">
        
        {/* Header del formulario */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-black text-gray-900 tracking-tight">Bienvenido</h2>
          <p className="text-gray-500 text-sm mt-2">Accede a tu cuenta de Vertex Tech</p>
        </div>

        {/* Inputs con estilo moderno */}
        <form className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1 ml-1">Usuario</label>
            <input 
              type="text" 
              className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all"
              placeholder="Tu usuario"
            />
          </div>
          
          <div>
            <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1 ml-1">Contraseña</label>
            <input 
              type="password" 
              className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all"
              placeholder="••••••••"
            />
          </div>

          <button className="w-full py-3 mt-4 bg-gray-900 text-white rounded-xl font-bold hover:bg-black transition-all transform hover:scale-[1.02] active:scale-95 shadow-lg shadow-gray-300">
            Iniciar Sesión
          </button>
        </form>

        <p className="text-center text-sm text-gray-400 mt-6">
          ¿No tienes cuenta? <a href="/register" className="text-indigo-600 font-semibold hover:underline">Regístrate</a>
        </p>
      </div>
    </div>
  );
}
