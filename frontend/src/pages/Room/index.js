import React from "react";
import { useHistory } from "react-router-dom";
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

const msg = [0,1,2,3,4,5,6,7,8,9,10,11];

const Room = () => {
  const history = useHistory();
  const styles = useStyles();

  return (
    <Container maxWidth="lg">
      <Container className={styles.header} disableGutters>
        <section className={styles.logo}>
          <img src={logo} width={115} />
          <strong>Bem vindo ao Web Chat, Caio César</strong>
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
            <Chat />
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
            color="#0e314a"
          />
          <Button className={styles.buttomSend} variant="contained">
            Send
            <IoMdSend size={30} style={{ marginLeft: 5 }} />
          </Button>
        </Container>
      </Card>
    </Container>
  );
};

export default Room;
