import React, { Component } from 'react';
import 'typeface-roboto';
import Tone from 'tone';
import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles } from '@material-ui/core/styles';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";
//import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Palette';
import Red from "./Red";
import Green from "./Green";
import Blue from "./Blue";

import './App.css';

var synth = new Tone.Synth({
  "oscillator": {
    "type": "pwm",
    "modulationFrequency": 0.2
  },
  "envelope": {
    "attack": 0.02,
    "decay": 0.1,
    "sustain": 0.2,
    "release": 0.9,
  }
}).toMaster();
var polySynth = new Tone.PolySynth(4, Tone.Synth).toMaster();

//start the note "D3" one second from now
synth.triggerAttack("C4", "2n");
polySynth.triggerAttack(["C4", "E4", "G4", "B4"], "2n");


const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
  },
});
class App extends Component {
  render() {
    return (
      <div className="App">
        <React.Fragment>
          <CssBaseline />
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
          />
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/red" component={Red} />
              <Route path="/green" component={Green} />
              <Route path="/blue" component={Blue} />
            </Switch>
          </BrowserRouter>
        </React.Fragment>
      </div >
    );
  }
}

//Home component
const Home = props => (
  <div className="home">
    <Link to="/red" style={{ textDecoration: 'none', color: 'black' }}>
      <Button variant="fab" color="secondary" aria-label="Add" className="button" style={{ padding: '30', margin: '10%', marginTop: '130%'}}>
        <AddIcon className="add"/>
      </Button>
    </Link>
  </div>
);

export default withStyles(styles)(App);