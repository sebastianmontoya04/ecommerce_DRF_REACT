import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { User, Mail, Shield, Calendar } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";


export const UserProfile = () => {
    const { user, logout, updateProfile } = useContext(AuthContext);
    const [modalOpen, setModalOpen] = useState(false)
    const [formData, setFormData] = useState({
        username: user.username || '',
        email: user.email || ''
    })

    const handleUpdate = async (e) => {
        e.preventDefault()
        const result = await updateProfile(formData)
        if (result.success) {
            toast.success("Perfil actualizado con exito!!")
            setModalOpen(false)
            return
        }
        toast.error('Error al actualizar el perfil')
    }

    const openModal = () => {
        setFormData({
            username: user.username,
            email: user.email
        });
        setModalOpen(true)
    }
    return (
        <div className="bg-gray-50 py-12 px-4">
            <Toaster />
            <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 overflow-hidden">

                {/* Banner Superior */}
                <div className="h-32 bg-gradient-to-r from-indigo-600 to-gray-900"></div>

                <div className="px-8 pb-8">
                    {/* Avatar y Nombre */}
                    <div className="relative -mt-16 mb-6 flex items-end space-x-5">
                        <div className="h-32 w-32 rounded-2xl bg-white p-2 shadow-lg">
                            <div className="h-full w-full rounded-xl bg-gray-100 flex items-center justify-center text-indigo-600">
                                <User size={48} />
                            </div>
                        </div>
                        <div className="pb-2">
                            <h1 className="text-3xl font-black text-gray-900">@{formData?.username}</h1>
                            <p className="text-gray-500 font-medium">Miembro de Vertex Tech</p>
                        </div>
                    </div>

                    <hr className="border-gray-100 my-8" />

                    {/* Información del Usuario */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-6">
                            <div>
                                <label className="flex items-center text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">
                                    <Mail size={14} className="mr-2" /> Correo Electrónico
                                </label>
                                <p className="text-gray-900 font-semibold bg-gray-50 p-3 rounded-xl border border-gray-100">
                                    {formData?.email || "Sin correo registrado"}
                                </p>
                            </div>

                            <div>
                                <label className="flex items-center text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">
                                    <Shield size={14} className="mr-2" /> Estado de Cuenta
                                </label>
                                <div className="flex items-center">
                                    <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full uppercase">
                                        Activa
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                            <h3 className="text-sm font-bold text-gray-900 mb-4 flex items-center">
                                <Calendar size={16} className="mr-2 text-indigo-600" /> Actividad Reciente
                            </h3>
                            <ul className="text-sm text-gray-500 space-y-3">
                                <li>• Último acceso: Hoy</li>
                                <li>• Perfil verificado</li>
                                <li>• Suscripción: Gratuita</li>
                            </ul>
                        </div>
                    </div>

                    {/* Botones de acción */}
                    <div className="mt-10 flex space-x-4">
                        <button className="px-6 py-3 bg-gray-900 text-white rounded-xl font-bold hover:bg-black transition-all shadow-lg shadow-gray-300"
                            onClick={openModal}>
                            Editar perfil
                        </button>
                        <button className="px-6 py-3 bg-white text-red-600 border border-red-100 rounded-xl font-bold hover:bg-red-50 transition-all"
                            onClick={logout}>
                            Cerrar Sesión
                        </button>
                    </div>
                </div>
                {modalOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-in fade-in duration-200">

                        {/* Contenido del Modal */}
                        <div className="w-full max-w-md bg-white rounded-[2.5rem] p-8 shadow-2xl scale-in-center border border-gray-100">

                            {/* Header del Modal */}
                            <div className="text-center mb-8">
                                <h2 className="text-2xl font-black text-gray-900 tracking-tight">Editar Perfil</h2>
                                <p className="text-gray-500 text-sm mt-1">Actualiza tu información personal</p>
                            </div>

                            <form className="space-y-5" onSubmit={handleUpdate}>
                                <div>
                                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-1.5 ml-1">Nombre</label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-3.5 rounded-2xl bg-gray-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all"
                                        placeholder="Tu nombre"
                                        value={formData.username}
                                        onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-1.5 ml-1">Email</label>
                                    <input
                                        type="email"
                                        className="w-full px-4 py-3.5 rounded-2xl bg-gray-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all"
                                        placeholder="Tu apellido"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    />
                                </div>

                                <div className="flex space-x-3 mt-8">
                                    <button
                                        type="button"
                                        className="flex-1 py-3.5 bg-gray-100 text-gray-600 rounded-2xl font-bold hover:bg-gray-200 transition-all active:scale-95"
                                        onClick={() => setModalOpen(false)}
                                    >
                                        Cancelar
                                    </button>
                                    <button
                                        type="submit"
                                        className="flex-1 py-3.5 bg-gray-900 text-white rounded-2xl font-bold hover:bg-black transition-all shadow-lg shadow-gray-200 active:scale-95"
                                    >
                                        Guardar
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};