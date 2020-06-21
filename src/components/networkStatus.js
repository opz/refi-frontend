import React, {useContext} from 'react';
import Link from '@material-ui/core/Link';
import { WalletContext } from "../providers/wallet";

export default function NetworkStatus ({connect, disconnect}) {
  const { account, auth } = useContext(WalletContext);

  const onConnect = (event) => {
    connect();
  };

  const onDisconnect = (event) => {
    disconnect();
  };
    return (
      <div>
        {auth?
          <Link
          component="button"
          variant="body2"
          onClick={onDisconnect}
          >
          Disconnect
          </Link>
          :<Link
          component="button"
          variant="body2"
          onClick={onConnect}
          >
          Connect
          </Link>
        }
      </div>
    );
  };

