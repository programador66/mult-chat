import React from 'react';
import { connect } from 'react-redux';
import Container from '@material-ui/core/Container';
import NavBar from '../../components/NavBar';
import CardRoom from '../../components/CardRoom';
import InitialRegister from '../../components/InitialRegister';

const Home = () => {
  return (
    <Container maxWidth="xl" disableGutters>
      <NavBar />
      <Container maxWidth="md">
          <CardRoom />
          <CardRoom />
      </Container>
      <InitialRegister />
    </Container>
  )
}

export default Home;