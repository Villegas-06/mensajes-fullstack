const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');
const { initSocket } = require('./sockets/socketEvents');

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
    cors: {
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST'],
        allowedHeaders: ['Content-Type', 'Authorization'],
    },
});


const PORT = process.env.PORT || 4000;

// Middleware
app.use(cors);
app.use(express.json());

// Socket.IO
initSocket(io);

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
