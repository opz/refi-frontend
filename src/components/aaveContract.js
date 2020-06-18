import React, { useState, useEffect, useContext } from "react";
import providerAbi from "refi-core/lib/aave-protocol/abi/LendingPoolAddressesProvider.json";
import { LendingPoolAddressesProvider as providerAddress } from "refi-core/config/aave-protocol/kovan.json";
import { Web3Context, Web3Provider, WebConsumer } from '../Context.js';

export default function AaveContract() {
  const web3 = useContext(Web3Context);
  const [loading, setLoading] = React.useState(true);
  const [loans, setLoans] = React.useState([
    { name: "contract 1" },
    { name: "contract 2" },
    { name: "contract 3" },
  ]);

  async function fetchContracts() {
    const provider = new web3.eth.contract(providerAbi, providerAddress);
    // Get the latest LendingPool contract address
    const lpAddress = await provider.methods
      .getLendingPool()
      .call()
      .catch((e) => {
        throw Error(`Error getting lendingPool address: ${e.message}`);
      });

    alert(lpAddress);

    setTimeout(() => {
      setLoading(false);
    }, 3000);
    return [];
  }

  useEffect(fetchContracts, []);

  return (
    <div>
      {loading && <h1>loading</h1>}
      <ul>
        {loans.map((loan) => {
          return <li>{loan.name}</li>;
        })}
      </ul>
    </div>
  );
}
