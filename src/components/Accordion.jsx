import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import '../style/App.css';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightBold,
  },
}));

export default function SimpleAccordion() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion className='info-main'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>How does Anfy work</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <p>When staking with Anfy, users receive stETH tokens on a 1:1 basis representing their staked ETH. stETH balances can be used like regular ETH to earn yields and lending rewards, and are updated on a daily basis to reflect your ETH staking rewards. Note that there are no lock-ups or minimum deposits when staking with Anfy.</p>
            <p>When using Anfy, users receive secure staking rewards in real-time, allowing for participation in the securing of Ethereum without the associated risks and downside potential.</p>
            <p>Learn more here.</p>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className='info-main'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>What is liquid staking</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Liquid staking protocols allow users to earn staking rewards without locking assets or maintaining staking infrastructure. Users can deposit tokens and receive tradable liquid tokens in return. The DAO-controlled smart contract stakes these tokens using elected staking providers. As users funds are controlled by the DAO, staking providers never have direct access to the users' assets
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className='info-main'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>What is stETH</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <p>stETH is a token that represents staked ether in Anfy, combining the value of initial deposit + staking rewards. stETH tokens are minted upon deposit and burned when redeemed. stETH token balances are pegged 1:1 to the ethers that are staked by Anfy. stETH token’s balances are updated when the oracle reports change in total stake every day.</p>
          <p>
           stETH tokens can be used as one would use ether, allowing you to earn ETH 2.0 staking rewards whilst benefiting from e.g. yields across decentralised finance products.</p>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className='info-main'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>What is ANFY token</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <p>LDO is an Ethereum token granting governance rights in the Anfy DAO. The Anfy DAO governs a set of liquid staking protocols, decides on key parameters (e.g., fees) and executes protocol upgrades to ensure efficiency and stability. By holding the LDO token, one is granted voting rights within the Anfy DAO. The more LDO locked in a user’s voting contract, the greater the decision-making power the voter gets.</p>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion className='info-main'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>What is the difference between self-staking and liquid staking</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <p>Ethereum is soon to be the biggest staking economy in the space. However, staking on ETH 2.0 requires expert knowledge and complex and costly infrastructure. There are several reasons why - the main being the fact that slashing and offline penalties can get very severe if the staking is managed improperly. In addition to this, self-staking brings with it a minimum deposit of 32 ETH and a token lock-up which could last years.</p>
          <p>Through the use of a liquid self-staking service such as Anfy, users can eliminate these inconveniences and benefit from secure, non-custodial staking backed by industry leaders.</p>
          </Typography>
        </AccordionDetails>
      </Accordion>
      
    </div>
  );
}
