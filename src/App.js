import React, { Component } from 'react';
import Web3 from 'web3';
import NetworkStatus from './components/network_status';

import './App.css';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';


class App extends Component {
  render() {

    return (
     <Container maxWidth="sm">
        <Button variant="contained" color="primary">
          Disconnect your wallet
        </Button>
        <NetworkStatus />
     </Container>
    );
  }
}



export default App;
