import React from 'react';
import { Link } from "react-router-dom";
import Slide from '@material-ui/core/Slide';
import screen from './screens/Second.svg';

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

  render() {
    var doc = document.documentElement;
var top = window.pageYOffset || document.documentElement.scrollTop;
console.log(top);

    return (
      <div style={divStyle} >
        <Slide  direction="left" in="true" mountOnEnter unmountOnExit>
        <p><Link to="/" style={{ textDecoration: 'none', color: 'black' }}><img  src={screen} alt="First"/>
</Link></p>
        </Slide>
      </div>
    )
  }
}

export default Color;