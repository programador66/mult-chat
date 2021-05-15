import React from 'react';
import Container from '@material-ui/core/Container';
import NavBar from '../../components/NavBar';
import CardRoom from '../../components/CardRoom';

// import { Container } from './styles';

const Home = () => {
  return (
    <Container maxWidth="xl" disableGutters>
      <NavBar />
      <Container maxWidth="md">
          <CardRoom />
          <CardRoom />
      </Container>
    </Container>
  )
}

export default Home;