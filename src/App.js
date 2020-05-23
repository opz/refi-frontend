import React, { Component } from 'react';
import Web3 from 'web3';
import NetworkStatus from './components/network_status';

import './App.css';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';


class App extends Component {
  componentWillMount(){
    this.loadBlockchainData()
  }

  async loadBlockchainData() {
    if (window.ethereum) {
      const web3 = new Web3(window.ethereum)
      await window.ethereum.enable();
      const network = await web3.eth.net.getNetworkType()
      const accounts = await web3.eth.getAccounts()
      this.setState({ account: accounts[0]})
      console.log(accounts)
    }
  }

  constructor(props) {
    super(props);
    this.state = { account: '' }
  }



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
