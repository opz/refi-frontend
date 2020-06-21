import React, {useContext} from 'react';
import IdentIcon from './identicon';
import NetworkStatus from './networkStatus';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { WalletContext } from "../providers/wallet";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Navbar({connect, disconnect}) {
  const classes = useStyles();
  const { account } = useContext(WalletContext);

    return (
    <div className={classes.root}>
      <AppBar position="static" color="inherit">
      <Toolbar>
      <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" className={classes.title}>
        ReFi
      </Typography>
        <IdentIcon />
        <div className="account_address">
          {account}
        <NetworkStatus connect={connect} disconnect={disconnect} />
      </div>
      </Toolbar>
      </AppBar>
    </div>
  );
}

