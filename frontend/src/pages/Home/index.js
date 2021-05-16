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
          <CardRoom name="sala 1"/>
          <CardRoom  name="sala 2" />
      </Container>
      <InitialRegister />
    </Container>
  )
}

export default Home;