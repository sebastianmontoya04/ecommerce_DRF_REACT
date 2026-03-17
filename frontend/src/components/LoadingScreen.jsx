export const LoadingScreen = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-white">
      {/* Contenedor del Logo con animación de pulso */}
      <div className="relative flex items-center justify-center">
        {/* Círculo de fondo con pulso */}
        <div className="absolute w-24 h-24 bg-indigo-100 rounded-full animate-ping opacity-25"></div>
        
        {/* Logo de Vertex Tech */}
        <h1 className="text-4xl font-black text-indigo-600 tracking-tighter relative z-10">
          VERTEX<span className="text-gray-900">TECH</span>
        </h1>
      </div>
      
      {/* Indicador de carga sutil */}
      <div className="mt-8 flex space-x-2">
        <div className="w-2 h-2 bg-indigo-600 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
        <div className="w-2 h-2 bg-indigo-600 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
        <div className="w-2 h-2 bg-indigo-600 rounded-full animate-bounce"></div>
      </div>
    </div>
  );
};