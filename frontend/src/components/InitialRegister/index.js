import React, {useState} from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const InitialRegister = ({user, dispatch}) => {
  const [nick, setNick] = useState("");

  const activeInativeModal = (nick) => {
      return {
        type: 'SET_USER',
        ativo: false,
        nickName: nick
      }
  }

  const handleClose = () => {
    dispatch(activeInativeModal(nick));
  };

  return (
    <div>
      <Dialog open={user.ativo}  disableBackdropClick aria-labelledby="form-dialog-title" >
        <DialogTitle id="form-dialog-title">Entrar no Chat</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Para visualizar o bate-papo com seus amigos basta inserir um Nome ou Nickname.
          </DialogContentText>
          <TextField
            onChange={(e) => setNick(e.target.value)}
            autoFocus
            value={nick}
            margin="dense"
            id="name"
            label="Nome ou NickName"
            type="text"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          {
            nick.length >= 3 &&
              <Button onClick={ () => handleClose()} color="primary">
                SALVAR
              </Button>
          }
          
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default connect(state => ({user:state}))(InitialRegister);