const { addUser, removeUser, getAllUsers } = require('../controllers/userController');
const { addMessage, getMessagesForUser } = require('../controllers/chatController');

exports.initSocket = function (io) {
    io.on('connection', (socket) => {
        console.log('New user connected');

        socket.on('join', (username) => {
            const user = addUser(socket.id, username);
            io.emit('userList', getAllUsers());
        });

        socket.on('sendMessage', ({ to, message }) => {
            addMessage(socket.id, to, message);
            io.to(to).emit('newMessage', { from: socket.id, message });
        });

        socket.on('getMessages', ({ userId }) => {
            const messages = getMessagesForUser(userId);
            socket.emit('userMessages', messages);
        });

        socket.on('disconnect', () => {
            removeUser(socket.id);
            io.emit('userList', getAllUsers());
            console.log('User disconnected');
        });
    });
}

