import express from 'express';
import http from 'http';
import { Socket } from 'socket.io';
import cors from 'cors';
import routes from './routes';
import Message from '../src/Models/Message';

const socketio = require('socket.io');

const app = express();
app.use(cors());

const server = http.createServer(app);

const io = socketio(server);

io.on('connection', async(socket: Socket) => {

   console.log(' estabelecendo nova conexão');
    const messages = await Message.find();
    socket.emit('previousMessages', messages);

   socket.on('sendMessage', async(data) => {
     const {createAt} = await Message.create(data);

      io.emit(data.room, {...data,createAt});
   })

   socket.on('info', async(data) => {
      io.emit(`${data.room}-info`, data);
   })

   socket.on('encerrar', () => console.log('conexão encerrada!'))
})

app.use(express.json());
app.use(routes);

server.listen(3333, () => {
   console.log('🚀🚀🚀🚀🚀🚀🚀🚀 server run on port 3333');
});