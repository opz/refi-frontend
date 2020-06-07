import React from 'react';
import Link from '@material-ui/core/Link';

export default function NetworkStatus ({connect, disconnect, auth}) {
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

