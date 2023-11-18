const express = require('express');
const socketIo = require('socket.io');

const port = process.env.PORT || 3000;

const app = express();

app.get('', (req, res) => {
    res.send('API works!');
});

const server = app.listen(port, () => {
    console.log(`App is running on port ${port}`);
});

const io = socketIo(server, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST']
    }
});

// Escuchar eventos
// El socket es el canal que queda abierto entre el cliente y el servidor
io.on('connection', (socket) => {
    console.log('Alguien se conectó! OMG ' + new Date().getTime());
    io.emit('userConnected');

    socket.on('messageSent', (data) => {
        socket.broadcast.emit('messageReceived', data);
    });
});

// Emitir eventos (emit y broadcast)
