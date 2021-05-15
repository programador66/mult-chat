import React from 'react';

import {useStyles} from './styles';

const msg = [0,1,2,3,4,5,6,7,8,9,10,11];

const Chat = () => {
   const styles = useStyles();
   
  return (
   <div className={styles.chat}>
      {msg.map((mg, index) => (
      <section key={index}>
         <strong>Caio Cesar: </strong>
         <p>Hello world my friend</p>
         <label style={{fontSize: 11}}>
            enviado: <strong>15/05/2021</strong>
         </label>
      </section>
      ))}
   </div>
  )
}

export default Chat;