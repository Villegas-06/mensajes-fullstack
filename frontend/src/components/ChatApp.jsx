import React, { useEffect, useState } from "react";
import io from "socket.io-client";

const ChatApp = () => {
  const [messages, setMessages] = useState([]);
  const socket = io("http://localhost:4000");

  useEffect(() => {
    // Escuchar por nuevos mensajes del servidor
    socket.on("newMessage", (data) => {
      // Aquí puedes actualizar el estado de los mensajes
      // data.from es el ID del remitente, data.message es el contenido del mensaje
      setMessages((prevMessages) => [...prevMessages, data]);
    });

    // Limpiar cuando el componente se desmonta
    return () => {
      socket.disconnect();
    };
  }, []);

  // Resto del código para enviar mensajes, similar al ejemplo anterior

  return (
    <div>
      {/* Aquí renderizas los mensajes */}
      {messages.map((message, index) => (
        <div key={index}>
          <strong>{message.from}</strong>: {message.message}
        </div>
      ))}
      {/* Resto del código para el formulario de enviar mensajes */}
    </div>
  );
};

export default ChatApp;
