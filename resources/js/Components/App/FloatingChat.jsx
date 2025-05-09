import { useState } from "react";
import PrimaryButton from "@/Components/PrimaryButton";

export default function FloatingChat({ onClose }) {
    const [isMinimized, setIsMinimized] = useState(false); // Estado para minimizar/maximizar
    const [message, setMessage] = useState("");

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (message.trim()) {
            console.log("Mensaje enviado:", message);
            setMessage(""); // Limpiar el campo de entrada
        }
    };

    return (
        <div className={`fixed bottom-5 right-5 w-80 ${isMinimized ? "h-120" : "h-96"} bg-gray-800 text-gray-100 border border-gray-700 rounded-lg shadow-lg flex flex-col`}>
            {/* Encabezado */}
            <div className="bg-indigo-600 text-white p-3 flex justify-between items-center rounded-t-lg">
                <h3 className="text-lg font-semibold">{isMinimized ? "Chat (Minimizado)" : "Chat"}</h3>
                <div className="flex gap-2">
                    {/* Botón para minimizar/maximizar */}
                    <button
                        className="text-gray-200 hover:text-white focus:outline-none"
                        onClick={() => setIsMinimized(!isMinimized)}
                    >
                        {isMinimized ? "⬆" : "⬇"}
                    </button>
                    {/* Botón para cerrar */}
                    <button
                        className="text-gray-200 hover:text-white focus:outline-none"
                        onClick={onClose}
                    >
                        ✕
                    </button>
                </div>
            </div>

            {/* Cuerpo del chat */}
            {!isMinimized && (
                <>
                    <div className="flex-1 p-3 overflow-y-auto bg-gray-900">
                        <p className="text-gray-400 text-sm">
                            ¡Hola! ¿En qué puedo ayudarte?
                        </p>
                        {/* Aquí puedes agregar mensajes dinámicos */}
                    </div>

                    {/* Input para enviar mensajes */}
                    <div className="p-3 border-t border-gray-700 bg-gray-800">
                        <form onSubmit={handleSendMessage} className="flex items-center gap-2">
                            <input
                                type="text"
                                placeholder="Escribe un mensaje..."
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                className="flex-1 bg-gray-700 text-gray-100 placeholder-gray-400 border border-gray-600 rounded-md p-2 focus:ring-indigo-500 focus:border-indigo-500"
                            />
                            <PrimaryButton type="submit" className="px-4 py-2">
                                Enviar
                            </PrimaryButton>
                        </form>
                    </div>
                </>
            )}
        </div>
    );
}