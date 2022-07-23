import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function Deposits() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Rewards</Title>
      <Typography component="p" variant="h6">
      0.00 reETH
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
      $0.00
      </Typography>
      <div>
        <Typography>
        Your reward ETH balance
       </Typography>
      </div>
    </React.Fragment>
  );
}