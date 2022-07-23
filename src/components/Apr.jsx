import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function Deposits() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Staking APR</Title>
      <Typography component="p" variant="h6">
      4.02 %
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
      ---
      </Typography>
      <div>
        <Typography>
        Annual rewards rate after fees
       </Typography>
      </div>
    </React.Fragment>
  );
}