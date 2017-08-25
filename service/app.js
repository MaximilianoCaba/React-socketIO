const express = require('express');
const app = express();
const server = require('http').Server(app);
var io = require('socket.io')(server);

var messages = [{
    author: "Carlos",
    texto: "Hola! que tal?"
}, {
    author: "Pepe",
    texto: "Muy bien! y tu??"
}, {
    author: "Paco",
    texto: "Genial!"
}];

app.get("/", (req, res) => {
    res.status(200).send("Hola mundo!")
});

io.on('connection', function (socket) {
    console.log('Un cliente se ha conectado');

    socket.emit('messages', messages);

    socket.on('new-message', function (data) {

        messages.push(data);

        io.sockets.emit('messages', messages)
    });
});



var port = 3001;
server.listen(port, () => {
    console.log("servidor escuchando en el puerto " + port)
});

