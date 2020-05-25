import React from 'react';
import NetworkStatus from './network_status';

function Header({account}) {
  return (
    <div>
      <NetworkStatus account={account}/>
    </div>
  );
}
export default Header;
