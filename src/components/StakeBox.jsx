import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { Box, Container } from '@mui/system';
import TextField from '@mui/material/TextField';
import '../style/App.css';


export default function StakeBox() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container className="staker" maxWidth="sm">
        <h5 className="stakeEth">Stake ETH and receive stETH while staking.</h5>
        <Box sx={{ bgcolor: '#fff', height: '60vh', boxShadow: 'rgba(17, 12, 46, 0.15) 0px 48px 100px 0px', borderRadius: '25px', marginTop: '-5px', paddingTop: '50px'}}>
        <TextField className="amount" id="outlined-basic" label="Amount" variant="outlined" />
        </Box>
      </Container>
    </React.Fragment>
  );
}
