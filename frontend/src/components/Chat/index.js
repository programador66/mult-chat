import React, { useEffect, useState } from 'react';
import {connect} from 'react-redux';
import {useStyles} from './styles';

import io from 'socket.io-client';

let socket;

   var connectionOptions =  {
      "force new connection" : true,
      "reconnectionAttempts": "Infinity", 
      "timeout" : 10000,                  
      "transports" : ["websocket"]
   };

const Chat = ({user,messageForSend}) => {
      
   const [messages, setMessages] = useState([]);
   const styles = useStyles();
   const ENDPOINT = 'localhost:3333';
   
   useEffect(() => {

      socket = io(ENDPOINT, connectionOptions);
      socket.on('previousMessages', (messages) => {
         if (messages.length) {
            const messagesFiltradas = messages.filter(message => user.room == message.room);
            setMessages(messagesFiltradas);
         }
      } )

      return () => {
         socket.emit('encerrar');
         socket.off();
      }
   },[ENDPOINT])

   useEffect(() => {
      console.log(user.room)
      socket.on(user.room, (message) => {
         setMessages([...messages,message])
         console.log("message Received")
         console.log(message)
      })
   },[messages])

   useEffect(() => {
      sedMessageChat();
   }, [messageForSend])

   const sedMessageChat = () => {
      if (messageForSend !== '')
      socket.emit('sendMessage', {nickName: user.nickName, room: user.room,msg: messageForSend})
   }

  return (
   <div className={styles.chat}>
      {messages.map((user, index) => (
      <section key={index}>
         <strong>{user.nickName}: </strong>
         <p>{user.msg}</p>
         <label style={{fontSize: 11}}>
            enviado: <strong>15/05/2021</strong>
         </label>
      </section>
      ))}
   </div>
  )
}

export default connect(state => ({user: state}))(Chat);