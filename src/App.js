import React, { useContext, useState, useEffect } from 'react'
import Web3 from 'web3';
import Web3Modal from "web3modal";
import Navbar from './components/navbar';
import { WalletContext } from "./providers/wallet";

function App() {
  const { wallet, setWallet, setAuth } = useContext(WalletContext);


  const providerOptions = {};
  const web3Modal = new Web3Modal({
      network: "mainnet", // optional
      cacheProvider: true, // optional
      providerOptions // required
  });

  function initWeb3(provider) {
      const web3: any = new Web3(provider);
      web3.eth.extend({
        methods: [
            {
              name: "chainId",
              call: "eth_chainId",
              outputFormatter: web3.utils.hexToNumber
            }
          ]
        });
    return web3;
  }

  async function connect() {
    try {
      const provider = await web3Modal.connect();
      const init = initWeb3(provider);
      setWallet(init);
      setAuth(true);
    } catch (err) {
        console.error(err);
    }
  };

  async function disconnect() {
    if (wallet && wallet.currentProvider && wallet.currentProvider.close) {
        await wallet.currentProvider.close();
    }
    await web3Modal.clearCachedProvider();
    setWallet(null);
    setAuth(false);
  };

  useEffect(() => {
    if (window.web3) {
      connect();
    }
  }, []);

  return (
      <div>
      <Navbar connect={connect} disconnect={disconnect} />
      </div>
  );
}

export default App;

