import React, { Component } from 'react';
import 'typeface-roboto';
import Tone from 'tone';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";
import First from "./First";

import './App.css';

//create a synth and connect it to the master output (your speakers)
var synth = new Tone.Synth().toMaster();
 
//play a middle 'C' for the duration of an 8th note
synth.triggerAttackRelease("C4", "8n");

const divStyle = {
  width: '412px',
  height: '740px',
  backgroundColor: '#FFFFFF',
  backgroundSize: 'cover'
};
class App extends React.Component {
  
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
              <p>Test</p>
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
  <div className="home" style={divStyle} >
    <p><Link to="/01" style={{ textDecoration: 'none', color: 'black' }}>Home</Link></p>
  </div>
);

export default App;
