import React, {useState, useEffect} from 'react';
import Web3 from 'web3';
import Web3Modal from "web3modal";
import Navbar from './components/navbar';
import AaveContract from './components/aaveContract';
import { initWeb3, web3Modal } from './Utils.js';



function App() {
  const [auth, setAuth] = React.useState(true);
  const [account, setAccount] = useState('');
  const [web3, setWeb3] = useState(null);

  async function connect() {
      try {
          const provider = await web3Modal.connect();
          const init = initWeb3(provider);
          const accounts = await init.eth.getAccounts();
          setAccount(accounts[0]);
          setWeb3(init);
          setAuth(true);
      } catch (err) {
          console.error(err);
      }
  };

  async function disconnect() {
      if (web3 && web3.currentProvider && web3.currentProvider.close) {
          await web3.currentProvider.close();
      }
      await web3Modal.clearCachedProvider();
      setAccount('');
      setWeb3(null);
      setAuth(false);
  };

  useEffect(() => {
      if (window.web3) {
          connect();
      }
  }, []);

  return (
      <div>
          <Navbar account={account} connect={connect} disconnect={disconnect} auth={auth}/>

          <AaveContract web3 = {web3} />
      </div>
  );
}

export default App;

