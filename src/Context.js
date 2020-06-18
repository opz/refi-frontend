import React, {createContext, useReducer} from 'react';
import Web3 from 'web3';
import Web3Modal from "web3modal";

const providerOptions = {};
const web3Modal = new Web3Modal({
  network: "mainnet", // optional
  cacheProvider: true, // optional
  providerOptions // required
});

function initWeb3() {
  const provider = web3Modal.connect();
  const web3 = new Web3(provider);
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
};

const initialState = null;
const Web3Context = createContext(initialState);
const { Provider } = Web3Context;
const Web3Provider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    console.log(state)
    return state;
  }, initialState);

  return (
    <Provider value={{ state, dispatch }}>{children}</Provider>
  );
};

export {Web3Context, Web3Provider, web3Modal, initWeb3};
