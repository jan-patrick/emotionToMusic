import React, { Component } from 'react';
import 'typeface-roboto';
import Tone from 'tone';
import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import First from "./First";

import './App.css';

var synth = new Tone.Synth({
  "oscillator" : {
      "type" : "pwm",
      "modulationFrequency" : 0.2
  },
  "envelope" : {
      "attack" : 0.02,
      "decay" : 0.1,
      "sustain" : 0.2,
      "release" : 0.9,
  }
}).toMaster();
var polySynth = new Tone.PolySynth(4, Tone.Synth).toMaster();

//start the note "D3" one second from now
synth.triggerAttack("C4", "2n");
polySynth.triggerAttack(["C4", "E4", "G4", "B4"], "2n");


const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    alignSelf:'center',
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
          <Grid
            container
            spacing={16}
            className="App"
            direction="row"
            justify="center"
            alignItems="flex-start">
            <Grid item xs={12}>
              <Grid key="switch" item>
              <BrowserRouter>
                <Switch>
                  <Route path="/01" component={First} />
                  <Route exact path="/" component={Home} />
                </Switch>
              </BrowserRouter>
              </Grid>
            </Grid>
          </Grid>
        </React.Fragment>
      </div>
    );
  }
}

//Home component
const Home = props => (
  <div className="home">
    <Link to="/01" style={{ textDecoration: 'none', color: 'black' }}>
    <Button variant="extendedFab" aria-label="Delete" className="button">
        <AddIcon className="test" />
           Start
      </Button>
    </Link>
  </div>
);

export default withStyles(styles)(App);