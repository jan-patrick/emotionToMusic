import React, { Component } from 'react';
import Tone from 'tone';
import logo from './logo.svg';
import './App.css';

//create a synth and connect it to the master output (your speakers)
var synth = new Tone.Synth().toMaster();
 
//play a middle 'C' for the duration of an 8th note
synth.triggerAttackRelease("C4", "8n");
class App extends Component {
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
