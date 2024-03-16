import { useEffect, useState } from 'react';
import io from 'socket.io-client';

const useSocket = (serverUrl) => {
    const [socket, setSocket] = useState(null);

    useEffect(() => {
        const socketIo = io(serverUrl);
        setSocket(socketIo);

        return () => {
            socketIo.disconnect();
        };
    }, [serverUrl]);

    return socket;
};

export default useSocket;
