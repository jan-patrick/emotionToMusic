import React, { Component } from 'react';
import 'typeface-roboto';
import Tone from 'tone';
import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles } from '@material-ui/core/styles';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
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
    marginRight: theme.spacing.unit + 90,
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
    <p><br/><br/><br/><br/><br/><br/><br/><p><br/><br/><br/><br/><br/><br/><br/></p><p><br/><br/><br/><br/><br/><br/><br/></p></p>
      <Button variant="extendedFab" aria-label="Delete" className="button">
        <AddIcon className="test" />
        Start
      </Button>
    </Link>
  </div>
);

export default withStyles(styles)(App);