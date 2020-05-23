import React, { Component } from 'react';
import Web3 from 'web3';
import IdentIcon from './identicon';

// const init = async () => {
//   const provider = new HDWalletProvider(
//     privateKey1,
//     'http://localhost:9545'
//     );

//   const web3 = new Web3(etherium.provider);
//   const id = awit web3.eth.net.getId();
//   const deployedNetwork = MyContract.networks[id];
//   const contract = new web3.eth.Contract(
//     MyContract.abi,
//     deployedNetwork.address
//   );

//   await contract.methods
//     .setData(10)
//     send({from: address});

//     const result = await contract.methods
//       .getData();
//       .call();

//   console.log(result);
// }

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
