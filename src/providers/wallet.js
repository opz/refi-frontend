import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import LendingPoolAddressesProviderAbi from "refi-core/lib/aave-protocol/abi/LendingPoolAddressesProvider.json";
import LendingPoolAbi from "refi-core/lib/aave-protocol/abi/LendingPool.json";
import {LendingPoolAddressesProvider, LendingPool} from "refi-core/config/aave-protocol/kovan.json";

const WalletContext = React.createContext();
const WalletConsumer = WalletContext.Consumer;

const WalletProvider = props => {
  const [wallet, setWallet] = useState(null);
  const [auth, setAuth] = useState(false);
  const [loading, setLoading] = useState(true);
  const [account, setAccount] = useState('');
  const [reservesData, setReservesData] = useState([]);

  async function loadAccount() {
    try {
      const accounts = await wallet.eth.getAccounts();
      const currentAccount = accounts[0];

      // Get the latest LendingPool contract address
      const provider = new wallet.eth.Contract(LendingPoolAddressesProviderAbi, LendingPoolAddressesProvider);
      const lpAddress = await provider.methods
      .getLendingPool()
      .call()
      .catch((e) => {
        throw Error(`Error getting lendingPool address: ${e.message}`)
      });

      const lpContract = new wallet.eth.Contract(LendingPoolAbi, lpAddress);
      const lpReserves = await lpContract.methods
      .getReserves()
      .call()
      .catch((e) => {
          throw Error(`Error getting reserves: ${e.message}`)
      });

      await lpReserves.map(async function(reserve) {
        const lpReserves = await lpContract.methods
        .getUserReserveData(reserve, currentAccount)
        .call()
        .then((reserveData) => {
          console.log(reserveData);
          reservesData.push(reserveData);
        })
        .catch((e) => {
          throw Error(`Error getting reserves: ${e.message}`)
        });
      });

      setAccount(currentAccount);
    } catch(err) {
      console.error(err);
    }
  }

  useEffect(() => {
    if (wallet) {
      loadAccount();
    } else {
      setAccount('');
      setReservesData([]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
}, [wallet]);

  return (
    <WalletContext.Provider value={{ wallet, setWallet, account, setAccount, auth, setAuth, reservesData }}>
      {props.children}
    </WalletContext.Provider>
  );
};

export { WalletContext, WalletConsumer, WalletProvider };


