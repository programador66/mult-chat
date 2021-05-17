import React, { useEffect, useState } from 'react';
import {connect} from 'react-redux';
import { IoMdPerson } from "react-icons/io";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import {useStyles} from './styles';
import api from '../../services/api';
import { ImEnter } from "react-icons/im";
import {CgLogOut} from "react-icons/cg";

const activeInativeModal = () => {
   return {
     type: 'SET_USERFINAL',
     finalyRegister: true
   }
}

const OnlinePersons = ({user,dispatch}) => {
  const styles = useStyles();
  const [usersBd, setUsersBd] = useState([]); 

  useEffect(() => {
     api.getAllUsers().then(response => {
        const users = response.data.data;
        setUsersBd(users);
     }).catch(e => console.log(e.response));
  },[user.nome])

  const verifyIfUserExists = () => {
     const verify = usersBd.filter(bd => bd.nickName === user.nickName );
     
     if (verify.length) {
      const userExisting = {
         type: 'SET_USERFINAL',
         finalyRegister: false,
         nome: verify[0].name,
         email:verify[0].email,
         data_nascimento: verify[0].data_aniversario,
       }
       dispatch(userExisting);
     } else {
      dispatch(activeInativeModal())
     }
  }
  return (
      <div className={styles.pessoasOnline}>
         <strong className={styles.header}> Usuários Total do chat {usersBd.length}</strong>
         <div className={styles.pessoas}>
         {
            usersBd.map((user,index) => (
               <div key={index}>
                  <IoMdPerson size={26} variant="outlined" />
                  <strong> {user.nickName}</strong>
               </div>
               )
            )
         }
         </div>
         <Divider orientation="horizontal" style={{marginTop: 30}} />
         {
            user.email === "" ? 
            <Button 
               variant="contained" 
               className={styles.buttoms}
               onClick={() => verifyIfUserExists()}
            >
               <ImEnter size={26} style={{ marginRight: 10 }} />
               Entrar no Chat
            </Button>
            : 
            <Button 
               variant="contained" 
               className={styles.buttomSair}
               onClick={() => dispatch({
                  type: 'SET_USERFINAL',
                  finalyRegister: false,
                  nome:"",
                  email:"",
                  data_nascimento:"",
                })}
            >
               <CgLogOut size={26} style={{ marginRight: 10 }} />
               sair Chat
            </Button>
         }
        
   </div>
  );
}

export default connect(state => ({user:state}))(OnlinePersons);