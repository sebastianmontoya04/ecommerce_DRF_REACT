import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export const MainLayout = ({children}) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Contenido principal que cambia según la ruta */}
      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>

      <Footer />
    </div>
  );
}
