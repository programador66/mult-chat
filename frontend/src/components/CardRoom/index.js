import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { useHistory } from 'react-router-dom';

import { useStyles } from "./styles";
import { connect } from "react-redux";

const setRoom = (room) => {
  return {
    type: 'SET_ROOM',
    room: room
  }
}

const CardRoom = ({name,user,dispatch}) => {
  const history = useHistory();
  const classes = useStyles();

  const goToChat = async (room) => {
    await dispatch(setRoom(room));
    history.push("/room");
  }

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2" className={classes.title}>
          {name}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained" className={classes.buttoms} onClick={() => goToChat(name)}>
          Entrar
        </Button>
      </CardActions>
    </Card>
  );
};

export default connect(state => ({user: state}))(CardRoom);
