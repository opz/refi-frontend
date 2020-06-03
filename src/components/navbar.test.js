const isNavbar = require('./navbar');

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
