import Web3 from 'web3';
import Web3Modal from "web3modal";



const providerOptions = {};
export const web3Modal = new Web3Modal({
  network: "mainnet", // optional
  cacheProvider: true, // optional
  providerOptions // required
});

export const initWeb3 = (provider) => {
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
};


