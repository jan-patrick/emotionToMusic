import React, { Component } from 'react';
import 'typeface-roboto';
import Tone from 'tone';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles } from '@material-ui/core/styles';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";
import Slide from '@material-ui/core/Slide';
import Button from '@material-ui/core/Button';
import { Events, animateScroll as scroll } from 'react-scroll';
import AddIcon from '@material-ui/icons/Palette';
import RedoIcon from '@material-ui/icons/Replay';
import redScreen from './screens/Red.svg';
import greenScreen from './screens/Green.svg';
import blueScreen from './screens/Blue.svg';
import './App.css';

var percent = 25;
var actualPath = 0;
var red = 0;
var green = 0;
var blue = 0;
var body = document.body;
var html = document.documentElement;
var documentHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
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
  constructor(props) {
    super(props);
    this.state = {
      activeStep: 0,
    }
    this.handleScroll = this.handleScroll.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }


  componentDidMount() {
    Events.scrollEvent.register('begin', function () {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register('end', function () {
      console.log("end", arguments);
      actualPath++;
      if(actualPath>=4 || actualPath < 0){
        actualPath = 0;
      }
    });

    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }

  handleScroll() {

    let supportPageOffset = window.pageXOffset !== undefined;
    let isCSS1Compat = ((document.compatMode || '') === 'CSS1Compat');
    let scroll = {
      x: supportPageOffset ? window.pageXOffset : isCSS1Compat ? document.documentElement.scrollLeft : document.body.scrollLeft,
      y: supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop
    };
    var body = document.body;
    var html = document.documentElement;
    var docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight) - window.innerHeight + 1;
    percent = scroll.y / docHeight;
    percent = Math.min(1, Math.max(percent, 0)) * 100;
    console.log(percent);
    console.log(actualPath);
    if(actualPath===1){
      red = this.scale(percent, 0, 100, 255, 0);
    } else if(actualPath===2){
      green = this.scale(percent, 0, 100, 255, 0);
    } else if(actualPath===3){
      blue = this.scale(percent, 0, 100, 255, 0);
    }
  }

  scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
  }

  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  };

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
              <Route exact path="/" component={Home}/>
              <Route path="/red" component={Red} />
              <Route path="/green" component={Green} />
              <Route path="/blue" component={Blue} />
              <Route path="/result" component={Result} />
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
    <Slide direction="left" in="true" mountOnEnter unmountOnExit>
      <Link to="/red" style={{ textDecoration: 'none', color: 'black' }}>
        <Button variant="fab" color="secondary" aria-label="Add" className="button" style={{ padding: '30', margin: '10%', marginTop: '130%' }} fontSize="large">
          <AddIcon className="add" />
        </Button>
      </Link>
    </Slide>
  </div>
);

//Red component
const Red = props => (
  <div className="red" onLoad={scroll.scrollMore(4700)}>
    <Slide direction="left" in="true" mountOnEnter unmountOnExit>
      <p><Link to="/green" style={{ textDecoration: 'none', color: 'black' }}><img src={redScreen} alt="Red" /></Link></p>
    </Slide>
  </div>
);

//Green component
const Green = props => (
  <div className="green" onLoad={scroll.scrollMore(4700)}>
    <Slide direction="left" in="true" mountOnEnter unmountOnExit>
      <p><Link to="/blue" style={{ textDecoration: 'none', color: 'black' }}><img src={greenScreen} alt="Green" /></Link></p>
    </Slide>
  </div>
);

//Blue component
const Blue = props => (
  <div className="blue" onLoad={scroll.scrollMore(4700)}>
    <Slide direction="left" in="true" mountOnEnter unmountOnExit>
      <p><Link to="/result" style={{ textDecoration: 'none', color: 'black' }}><img src={blueScreen} alt="Blue" /></Link></p>
    </Slide>
  </div>
);

//Result component
const Result = props => (
  <div style={{ backgroundColor: "rgb("+red+","+green+","+blue+")", height: documentHeight }}>
    <Slide direction="left" in="true" mountOnEnter unmountOnExit>
      <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
        <Button variant="fab" color="secondary" aria-label="Add" className="button" style={{ padding: '30', margin: '10%', marginTop: '130%' }} fontSize="large">
          <RedoIcon className="redo" />
        </Button>
      </Link>
    </Slide>
  </div>
);

App.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(App);