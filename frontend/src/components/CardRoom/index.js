import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { useHistory } from 'react-router-dom';

import { useStyles } from "./styles";

const CardRoom = () => {
  const history = useHistory();
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2" className={classes.title}>
          Sala 1
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained" className={classes.buttoms} onClick={() => history.push("/room")}>
          Entrar
        </Button>
      </CardActions>
    </Card>
  );
};

export default CardRoom;
