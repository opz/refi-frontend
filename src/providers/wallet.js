import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import providerAbi from "refi-core/lib/aave-protocol/abi/LendingPoolAddressesProvider.json";
import { LendingPoolAddressesProvider as providerAddress } from "refi-core/config/aave-protocol/kovan.json";

const WalletContext = React.createContext();
const WalletConsumer = WalletContext.Consumer;

const WalletProvider = props => {
  const [wallet, setWallet] = useState(null);
  const [auth, setAuth] = useState(false);
  const [loading, setLoading] = useState(true);
  const [account, setAccount] = useState('');

  async function loadAccount() {
    try {
      const accounts = await wallet.eth.getAccounts();
      setAccount(accounts[0]);
    } catch(err) {
      console.error(err);
    }
  }

  async function fetchContracts() {
  const provider = new wallet.eth.Contract(providerAbi, providerAddress);
  // Get the latest LendingPool contract address
  const lpAddress = await provider.methods
      .getLendingPool()
      .call()
      .catch((e) => {
          throw Error(`Error getting lendingPool address: ${e.message}`)
      })
      alert(lpAddress)
  setTimeout(() => {
    setLoading(false)
  }, 3000)
  return []
};


  useEffect(() => {
    if (wallet) {
      loadAccount();
      fetchContracts();
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


