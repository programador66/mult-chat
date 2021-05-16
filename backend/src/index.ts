import express from 'express';
import http from 'http';
import { Socket } from 'socket.io';
import cors from 'cors';
import routes from './routes';

const socketio = require('socket.io');

let messages: any = [];

const app = express();
app.use(cors());

const server = http.createServer(app);

const io = socketio(server);

io.on('connection', (socket: Socket) => {

   console.log(' estabelecendo nova conexão');
    
    socket.emit('previousMessages', messages);

   socket.on('sendMessage', (data) => {
      console.log(data);
      messages.push(data);
      io.emit(data.room, data);
   })

   socket.on('encerrar', () => console.log('conexão encerrada!'))
})

app.use(express.json());
app.use(routes);

server.listen(3333, () => {
   console.log('🚀🚀🚀🚀🚀🚀🚀🚀 server run on port 3333');
})