import React from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import '../style/App.css';

const useStyles = makeStyles((theme) => ({
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));


export default function StakeBox() {

    const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container className="staker" maxWidth="sm">
        <div className="stakeintro">
        <Typography component="h1" variant="h5">
          Stake Ether
        </Typography>
        <p>Stake ETH and receive stETH while staking.</p>
        </div>
        <Box sx={{ bgcolor: '#fff', height: '50vh', boxShadow: 'rgba(17, 12, 46, 0.15) 0px 48px 100px 0px', borderRadius: '25px', marginTop: '-5px', paddingTop: '17px'}}>

        <form className="form" noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="amount"
            type="number"
            label="Amount"
            name="amount"
            autoComplete="amount"
            autoFocus
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Submit
          </Button>
          <Grid container>
            <Grid item xs>
            <ul className="list">
              <li>You will receive</li>
              <li>Exchange rate</li>
              <li>Transaction cost</li>
              <li>Reward fee</li>
            </ul>
            </Grid>
            <Grid item>
            <ul className="list2">
              <li>0</li>
              <li>1 ETH = 1 stETH</li>
              <li>$2.30</li>
              <li>10%</li>
            </ul>
            </Grid>
          </Grid>
        </form>

        </Box>
      </Container>
    </React.Fragment>
    )};