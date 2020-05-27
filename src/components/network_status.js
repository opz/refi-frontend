import React, { Component } from 'react';
import Web3 from 'web3';
import Web3Modal from "web3modal";
import IdentIcon from './identicon';


function NetworkStatus({account}) {
  return (
    <div>
      {account}
      <IdentIcon />
    </div>
  );
}
export default NetworkStatus;
