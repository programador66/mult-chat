import React from 'react';
import {connect} from 'react-redux';
import { IoMdPerson } from "react-icons/io";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import {useStyles} from './styles';

const msg = [0,1,2];

const activeInativeModal = () => {
   return {
     type: 'SET_USERFINAL',
     finalyRegister: true
   }
}

const OnlinePersons = ({user,dispatch}) => {

  const styles = useStyles();
  return (
      <div className={styles.pessoasOnline}>
         <strong className={styles.header}> 2 pessoas online</strong>
         <div className={styles.pessoas}>
         {
            msg.map(t => (
               <div key={t}>
                  <IoMdPerson size={26} variant="outlined" />
                  <strong> Caio César</strong>
               </div>
               )
            )
         }
         </div>
         <Divider orientation="horizontal" style={{marginTop: 30}} />
         <Button 
            variant="contained" 
            className={styles.buttoms}
            onClick={() => dispatch(activeInativeModal())}
         >
            Entrar no Chat
         </Button>
   </div>
  );
}

export default connect(state => ({user:state}))(OnlinePersons);