import React, { useEffect, useContext } from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { WalletContext } from '../providers/wallet';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    padding: theme.spacing(0, 3),
  },
  paper: {
    maxWidth: 400,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
  },
}));

const message = `Truncation should be conditionally applicable on this long line of text
 as this is a much longer line than what the container can support. `;

export default function LoanCollection() {
  const classes = useStyles();
  const { reservesData } = useContext(WalletContext);

   return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
      <Grid item>
        <Avatar>W</Avatar>
      </Grid>
      {reservesData ?
        <Grid container spacing={2}>
          {reservesData.map(reserveData => (
            <Grid item>
            Borrow Rate:
              <Typography noWrap>{reserveData.borrowRate}</Typography>
            </Grid>
          ))}
        </Grid> :
        'hui'
      }
      </Paper>
   </div>
  );
}



