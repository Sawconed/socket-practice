import express, { Express, Request, Response } from "express";
const app: Express = express();
import http from 'http';
const server = http.createServer(app);
import { Server } from "socket.io";
const io = new Server(server);

app.get("/", (req: Request, res: Response) => {
  res.sendFile(__dirname + '/client/index.html');
});

app.get("/login", (req: Request, res: Response) => {
  res.sendFile(__dirname + "/client/login.html");
})

io.on('connection', (socket) => {
  console.log("a user connected");
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });

  socket.on('message typing', (msg) => {
    socket.broadcast.emit("message typing", msg);
  })

  socket.on('chat message', (value) => {
    io.emit('chat message', value);
  })
})

server.listen(3000, () => {
  console.log("Listening on http://localhost:3000");
})
