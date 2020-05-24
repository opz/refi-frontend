import React, { Component } from 'react';
import Web3 from 'web3';
import Web3Modal from "web3modal";
import IdentIcon from './identicon';


class NetworkStatus extends Component {
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
    }
}


  constructor(props) {
    super(props);
    this.state = { account: '' }
  }

  render() {
    return (
      <div>
        adress: {this.state.account}
        <IdentIcon />
      </div>
    );
  }
}


export default NetworkStatus;
