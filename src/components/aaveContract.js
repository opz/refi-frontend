import React, {useState, useEffect} from 'react';
import providerAbi from "refi-core/lib/aave-protocol/abi/LendingPoolAddressesProvider.json";
import { LendingPoolAddressesProvider as providerAddress } from "refi-core/config/aave-protocol/kovan.json";



export default function AaveContract({web3}) {
  const [loading, setLoading] = React.useState(true)
  const [loans, setLoans] = React.useState([
  { name: "contract 1" },
  { name: "contract 2" },
  { name: "contract 3" }
  ]);



  async function fetchContracts() {
  const provider = new web3.eth.Contract(providerAbi, providerAddress);
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

  React.useEffect(fetchContracts, [])
    return (
      <div>
      {loading && <h1>loading</h1>}
      <ul>
        {loans.map(loan => {
          return (<li>{loan.name}</li>)
        })
      }
      </ul>
      </div>
    )};
