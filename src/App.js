import React, {useState, useEffect} from 'react';
import Web3 from 'web3';
import Web3Modal from "web3modal";
import Navbar from './components/navbar';

function App() {
    const [account, setAccount] = useState('');
    const [web3, setWeb3] = useState(null);

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
            const web3 = initWeb3(provider);
            const accounts = await web3.eth.getAccounts();
            setAccount(accounts[0]);
            setWeb3(web3);
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
    };

    useEffect(() => {
        if (window.web3) {
            connect();
        }
    }, []);

    return (
        <div>
            <Navbar account={account} connect={connect} disconnect={disconnect} />
        </div>
    );
}

export default App;

