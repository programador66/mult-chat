import React from 'react';
import Container from '@material-ui/core/Container';
import NavBar from '../../components/NavBar';
import CardRoom from '../../components/CardRoom';
import InitialRegister from '../../components/InitialRegister';

const Home = () => {
  return (
    <Container maxWidth="xl" disableGutters>
      <NavBar />
      <Container maxWidth="md">
          <CardRoom name="SALA VERDE"/>
          <CardRoom  name="SALA AZUL"/>
          <CardRoom  name="SALA VERMELHA"/>
          <CardRoom  name="SALA ROSA"/>
      </Container>
      <InitialRegister />
    </Container>
  )
}

export default Home;