import React, { useEffect, useState } from 'react';
import {connect} from 'react-redux';
import {useStyles} from './styles';
import Socket from '../../services/socketio';

const Chat = ({user,messageForSend}) => {
      
   const [messages, setMessages] = useState([]);
   const [info, setInfo] = useState({});
   const [nicklogout,setNickLogout] = useState("");
   const [roomLogout,setRoomlogout] = useState("");
   const styles = useStyles();

   function scroll() {
      var objScrDiv = document.getElementById("chatt");
      objScrDiv.scrollTop = objScrDiv.scrollHeight;
    }

   useEffect(() => {
      Socket.connect();

      Socket.socket.on('previousMessages', (messages) => {
         if (messages.length) {
            const messagesFiltradas = messages.filter(message => user.room === message.room);
            setMessages(messagesFiltradas);
         }
      } )
      setNickLogout(user.nickName);
      setRoomlogout(user.room);
      scroll();
   },[])

   useEffect(() => {
      
      Socket.socket.on(user.room, (message) => {
         setMessages([...messages,message])
      })
      scroll();
   },[messages,user.room])

   useEffect(() => {
      sendMessageChat();
   }, [messageForSend])

   const sendMessageChat = () => {
      if (messageForSend !== '')
      Socket.socket.emit('sendMessage', {nickName: user.nickName, room: user.room,msg: messageForSend})
   }

   useEffect(() => {
      Socket.socket.emit('info',
      {nickName: nicklogout || user.nickName,
       room: roomLogout || user.room,
       msg: user.loginChat ? "Entrou na sala" : "Saiu da sala"
      });

      Socket.socket.on(`${user.room}-info`, (dat) => {
         if (Object.keys(dat).length) {
            setInfo(dat)
         }
         
      })

   },[user.loginChat])

  return (
   <div className={styles.chat} id="chatt">
      {messages.map((user, index) => (
      <section key={index}>
         <strong>{user.nickName}: </strong>
         <p>{user.msg}</p>
         <label style={{fontSize: 11}}>
            enviado: <strong>{new Date(user.createAt).toLocaleDateString() +" " +new Date(user.createAt).toLocaleTimeString()}</strong>
         </label>
      </section>
      ))}
      
      <seaction className={styles.info}>
         <strong>{info.nickName}</strong>
         <p>{info.msg}</p>
      </seaction> 
   </div>
  )
}

export default connect(state => ({user: state}))(Chat);