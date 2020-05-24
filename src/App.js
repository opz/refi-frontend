import React from 'react';
import Web3 from "web3";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import Portis from "@portis/web3";
import Fortmatic from "fortmatic";
import Squarelink from "squarelink";
import Torus from "@toruslabs/torus-embed";
import Authereum from "authereum";
import BurnerConnectProvider from "@burner-wallet/burner-connect-provider";
import './App.css';
import IdentIcon from './components/identicon';

// const providerOptions = {
//   /* See Provider Options Section */
// };

// const web3Modal = new Web3Modal({
//   network: "mainnet", // optional
//   cacheProvider: true, // optional
//   providerOptions // required
// });

// const provider = await web3Modal.connect();

// const web3 = new Web3(provider);

function App() {
  return (
    <div>
      <h1> Hello world </h1>
      <IdentIcon />
    </div>
  );
}

export default App;
