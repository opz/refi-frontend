import React, {useState, useEffect} from 'react';
import Web3 from 'web3';
import Web3Modal from "web3modal";
import Navbar from './components/navbar';

function App() {
  const providerOptions = {};
  const web3Modal = new Web3Modal({
  network: "mainnet", // optional
  cacheProvider: true, // optional
  providerOptions // required
});

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
  };

  useEffect(() => {
    if (window.web3) {
      connect();
    }
  }, []);


  return (
    <div>
      <Navbar account={account} />
    </div>
  );
}

export default App;



