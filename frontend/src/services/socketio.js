import io from 'socket.io-client';


class Socket {
    
    constructor (){
        let socket;
        const ENDPOINT = 'localhost:3333';

        const connectionOptions =  {
        "force new connection" : true,
        "reconnectionAttempts": "Infinity", 
        "timeout" : 10000,                  
        "transports" : ["websocket"]
        };

        this.connectionOptions = connectionOptions;
        this.socket = socket;
        this.ENDPOINT = ENDPOINT;
    }

    connect() {
        this.socket = io(this.ENDPOINT, this.connectionOptions);
    }

    desconnect() {
        this.socket.emit('encerrar');
        this.socket.off();
    }

}

export default new Socket();