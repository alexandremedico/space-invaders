const express = require('express');
const http = require('http');
const socketio = require('socket.io');

const app = express();
const server = http.Server(app);
const io = socketio(server);
const chemin = {
    root: __dirname + '/front'
};

// Middlewares
app.use(express.static(chemin.root));

// Routes
app.get('/', (req, res) => {
    res.render('/index.html');
})

// Lancement de l'application
server.listen(process.env.PORT || 5234, () => console.log("Serveur ouvert sur le port 5234"));