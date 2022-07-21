import * as React from 'react';
import { Box, Container } from '@mui/system';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import '../style/App.css';

function createData(name, calories) {
  return { name, calories };
}

const rows = [
  createData("You will recieve", 159),
  createData("Exchange rate", 237),
  createData("Transaction cost", 262),
  createData("Reward fee", 305)
];


export default function StakeBox() {
  return (
    <React.Fragment>
      <Container className="staker" maxWidth="sm">
        <Box className="stakeintro">
        <h5 className="stakeEth">Stake Ether</h5>
        <p>Stake ETH and receive stETH while staking.</p>
        </Box>
        <Box sx={{ bgcolor: '#fff', height: '50vh', boxShadow: 'rgba(17, 12, 46, 0.15) 0px 48px 100px 0px', borderRadius: '17px', paddingTop: '50px'}}>
        <Stack component="form" sx={{ width: '80%', margin: 'auto' }} >
        <TextField className="amount" id="outlined-basic" label="Amount" variant="outlined" sx={{marginBottom: '30px'}} />
        <Button variant="contained" size="large">
          Submit
        </Button>
        </Stack>

        <TableContainer>
          <Table sx={{ width: '80%', margin: 'auto', borderBottom: '0', marginTop: '25px' }} aria-label="simple table">
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{  borderBottom: '0'  }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.calories}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        </Box>
      </Container>
    </React.Fragment>
  );
}
