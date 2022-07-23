import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';
import '../style/App.css';
import Deposit from '../components/Deposit';
import Reward from '../components/Reward';
import Apr from '../components/Apr';
import Tx from '../components/Tx';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'left',
    color: theme.palette.text.secondary,
  },
  paper1: {
    padding: theme.spacing(2),
    textAlign: 'left',
    color: theme.palette.text.secondary,
    marginTop: '30px',
  },
  
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container className='contain'>
      <Grid container spacing={3}>
        <Grid item xs>
          <Paper className={classes.paper}><Deposit/></Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}><Reward/></Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}><Apr/></Paper>
        </Grid>
      </Grid>
      <Paper className={classes.paper1}>
      <Tx/>
      </Paper>
      </Container>
      
    </div>
  );
}
