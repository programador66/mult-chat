import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { connect } from 'react-redux';

import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import TextField from "@material-ui/core/TextField";
import Divider from "@material-ui/core/Divider";
import { useStyles } from "./styles";
import Button from "@material-ui/core/Button";
import logo from "../../assets/undraw_Group_chat_re_frmo.svg";
import { IoMdSend } from "react-icons/io";

import Chat from '../../components/Chat';
import OnlinePersons from "../../components/OnlinePersons";
import FinalyRegister from "../../components/FinalyRegister";

const Room = ({user}) => {
  const history = useHistory();
  const styles = useStyles();
  const [message, setMessage] = useState('');
  const [send, setSend] = useState('');

  const sendMessage = () => {
    setSend(message);
    setMessage('');
  }

  return (
    <Container maxWidth="lg">
      <Container className={styles.header} disableGutters>
        <section className={styles.logo}>
          <img src={logo} width={115} />
          <strong>Bem vindo ao Web Chat, {user.nickName}</strong>
        </section>

        <Button
          variant="outlined"
          style={{ color: "#0e314a" }}
          onClick={() => history.goBack()}
        >
          Voltar ao início
        </Button>
      </Container>
      <div className={styles.titleRoom}>
        <strong>SALA 1</strong>
      </div>
      <Card className={styles.root}>
        <Container className={styles.containerChat} disableGutters>
            <Chat messageForSend={send} />
          <Divider orientation="vertical" />
            <OnlinePersons />
        </Container>

        <Container className={styles.bottom}>
          <TextField
            className={styles.textfield}
            id="outlined-multiline-static"
            label="Insira sua mensagem"
            defaultValue=""
            variant="outlined"
            value={message}
            onChange={e => setMessage(e.target.value) }
            onKeyPress={event => event.key === 'Enter' ? sendMessage() : null }
          />
          <Button className={styles.buttomSend} variant="contained">
            Send
            <IoMdSend size={30} style={{ marginLeft: 5 }} />
          </Button>
        </Container>
      </Card>
      {
        !user.FinalyRegister && 
        <FinalyRegister />
      }
      
    </Container>
  );
};

export default connect(state => ({user: state}))(Room);
