import React, {useState} from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import api from '../../services/api';

const FinalyRegister = ({user, dispatch}) => {  
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [data_nascimento, setDataNascimento] = useState("");

  const activeInativeModal = (nome,email,data_nascimento) => {
    return {
      type: 'SET_USERFINAL',
      finalyRegister: false,
      nome,
      email,
      data_nascimento
    }
  }

const closeModalFinaly = () => {
  return {
    type: 'CLOSE_MODALFINALY',
    finalyRegister: false
  }
}

  const handleClose = () => {
    dispatch(closeModalFinaly());
  };

  const handleSaveUser = (nickName) => {
    if (nome === "" || email === "" || data_nascimento === "")
      return alert("Favor verificar os valores informados!");

   const user = {
      nickName,
      name:nome,
      email,
      data_aniversario:data_nascimento
   }
   

   api.setUser(user).then(response => {
     const data = response.data;
     if (data.success) {
      dispatch(activeInativeModal(data.user.name,data.user.email,data.user.data_aniversario));
      setDataNascimento("");
      setEmail("");
      setNome("");
     }
   }).catch(e => console.log(e.response));

  }

  return (
    <div>
      <Dialog open={user.finalyRegister}  disableBackdropClick aria-labelledby="form-dialog-title" >
        <DialogTitle id="form-dialog-title">Estamos quase lá!</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Complete seu cadastro fala começar a conversar!
          </DialogContentText>
          <TextField
            onChange={e => setNome(e.target.value)}
            autoFocus
            value={nome}
            margin="dense"
            id="name"
            label="Nome Completo"
            type="text"
            fullWidth
          />

         <TextField
            onChange={e => setEmail(e.target.value)}
            value={email}
            margin="dense"
            id="name"
            label="Email"
            type="email"
            fullWidth
          />
         <TextField
            style={{marginTop: 8}}
            onChange={e => setDataNascimento(e.target.value)}
            id="date"
            label="Aniversário"
            type="date"
            value={data_nascimento}         
            InputLabelProps={{
               shrink: true,
            }}
         />
        </DialogContent>
        <DialogActions>
         <Button onClick={handleClose} color="primary">
                CANCELAR
          </Button>
          {
            nome.length >= 3 &&
              <Button onClick={() => handleSaveUser(user.nickName)} color="primary">
                SALVAR
              </Button>
          }
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default connect(state => ({user:state}))(FinalyRegister);