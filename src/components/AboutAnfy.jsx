import React from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
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
    heading: {
      fontWeight: theme.typography.fontWeightBold,
    },
  }));


export default function AboutAnfy() {

    const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
        <div className="info">
        <Typography component="h1" variant="h5" className={classes.heading}>
          What is Anfy
        </Typography>
        </div>
        <p className="stake-info">
            Anfy is a liquid staking solution for ETH 2.0 backed by industry-leading staking providers. Anfy lets users stake their ETH - without locking assets or maintaining infrastructure - whilst participating in on-chain activities, e.g. lending.
            <p>Our goal is to solve the problems associated with initial ETH 2.0 staking - illiquidity, immovability and accessibility - making staked ETH liquid and allowing for participation with any amount of ETH to improve security of the Ethereum network.</p>

            <p>As part of our continuing efforts to be a force for decentralization, we have published a scorecard for community input and accountability.
            Learn more here.</p>
        </p>
    </React.Fragment>
    )};