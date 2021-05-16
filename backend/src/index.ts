import express from 'express';
import routes from './routes';
import cors from 'cors';
import http from 'http';

const socketio = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use(cors());

app.use(express.json());
app.use(routes);

app.listen(3333, () => {
   console.log('🚀🚀🚀🚀🚀🚀🚀🚀 server run on port 3333');
})