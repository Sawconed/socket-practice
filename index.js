const express = require("express");
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.get("/", (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  console.log("a user connected");
  socket.on('disconnect', () => {
    console.log('user disconnected');
  })
  socket.on('chat message', (value) => {
    io.emit('chat message', value);
  })
})

server.listen(3000, () => {
  console.log("Listening on localhost://3000");
})
