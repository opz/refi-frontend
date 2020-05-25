import React, { useState, useEffect } from 'react';
import Web3 from "web3";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import Portis from "@portis/web3";
import Fortmatic from "fortmatic";
import Squarelink from "squarelink";
import Torus from "@toruslabs/torus-embed";
import Authereum from "authereum";
import BurnerConnectProvider from "@burner-wallet/burner-connect-provider";
import IdentIcon from './components/identicon';
import Container from '@material-ui/core/Container';
import Header from './components/header';

const providerOptions = {};
const web3Modal = new Web3Modal({
  network: "mainnet", // optional
  cacheProvider: true, // optional
  providerOptions // required
});

function App() {
  const [account, setAccount] = useState('');
  async function connect() {
    try {
      const provider = await web3Modal.connect();
      const web3 = new Web3(provider);
      const accounts = await web3.eth.getAccounts();
      setAccount(accounts[0]);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    if (window.web3) {
      connect();
    }
  }, []);

  return (
    <Container maxWidth="sm">
      <Header account={account}/>
    </Container>
  );
}

export default App;



