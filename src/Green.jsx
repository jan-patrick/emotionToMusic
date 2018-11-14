import React from 'react';
import { Link } from "react-router-dom";
import Slide from '@material-ui/core/Slide';
import screen from './screens/Green.svg';

const divStyle = {
  backgroundImage: `url(${screen})`,
  margin: `none`,
  padding: `none`,
}

class Color extends React.Component {

  constructor() {
    super();
    this.state = {
      redirectToReferrer: false
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }


  render() {
    //var winHeight = window.innerHeight;

   //var body = document.body;
   //var html = document.documentElement;
   //var docHeight = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );

    return (
      <div style={divStyle}>
        <Slide  direction="left" in="true" mountOnEnter unmountOnExit onEnter={console.log(document.body.scrollTop)}>
        <p><Link to="/blue" style={{ textDecoration: 'none', color: 'black' }}><img  src={screen} alt="First"/></Link></p>
        </Slide>
        
      </div>
    )
  }
}

export default Color;