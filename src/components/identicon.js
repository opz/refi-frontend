import React, { Component } from 'react';
import Jazzicon, { jsNumberForAddress } from 'react-jazzicon'

class IdentIcon extends Component {
 render() {
    return (
      <Jazzicon diameter={35} seed={jsNumberForAddress('0x1111111111111111111111111111111111111111')} />
    );
  }
}

export default IdentIcon;
