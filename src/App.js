import React from "react";
import "./style/App.css";
import Dashboard from './pages/Dashboard';
import Stake from './pages/Stake';
import Rewards from './pages/Rewards';
import Transactions from './pages/Transactions';
import { Route, Switch } from "react-router-dom";
import Drawer from './components/Drawer';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    display: "flex"
  }
});

export default function App() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Drawer />
      <Switch>
      <Route exact from="/" render={props => <Dashboard {...props} />} />
        <Route exact from="/stake" render={props => <Stake {...props} />} />
        <Route exact path="/rewards" render={props => <Rewards {...props} />} />
        <Route exact path="/transactions" render={props => <Transactions {...props} />} />
      </Switch>
    </div>
  );
}