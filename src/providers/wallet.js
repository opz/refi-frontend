import React, { useState, useEffect } from 'react';
import Web3 from 'web3';


const WalletContext = React.createContext();
const WalletConsumer = WalletContext.Consumer;

const WalletProvider = props => {
  const [wallet, setWallet] = useState(null);
  const [auth, setAuth] = useState(false);
  const [account, setAccount] = useState('');

  async function loadAccount() {
    try {
      const accounts = await wallet.eth.getAccounts();
      setAccount(accounts[0]);
    } catch(err) {
      console.error(err);
    }
  }

  useEffect(() => {
    if (wallet) {
      loadAccount();
    } else {
      setAccount('');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
}, [wallet]);

  return (
    <WalletContext.Provider value={{ wallet, setWallet, account, setAccount, auth, setAuth }}>
      {props.children}
    </WalletContext.Provider>
  );
};

export { WalletContext, WalletConsumer, WalletProvider };


