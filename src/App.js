import React, {useState, useEffect, useContext} from 'react';
import Web3 from 'web3';
import Web3Modal from "web3modal";
import Navbar from './components/navbar';
import AaveContract from './components/aaveContract';
import { initWeb3, web3Modal, Web3Context } from './Context.js';


function App() {
  const web3 = useContext(Web3Context);
  const { dispatch } = web3;
  const [auth, setAuth] = useState(true);
  const [account, setAccount] = useState('');

  async function connect() {
      try {
          const init = initWeb3();
          const accounts = await init.eth.getAccounts();
          dispatch({}, init);
          setAccount(accounts[0]);
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
      dispatch(null);
      setAccount('');
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
        <AaveContract />
      </div>
  );
}

export default App;

