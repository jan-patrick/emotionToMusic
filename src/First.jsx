import React from 'react';
import Fade from '@material-ui/core/Fade';
import { Link } from "react-router-dom";



class Color extends React.Component {

  constructor() {
    super();
    this.state = {
      redirectToReferrer: false
    }
  }

  render() {

    return (
      <div>
        <Fade in='true'>
        <p><Link to="/" style={{ textDecoration: 'none', color: 'black' }}>Home</Link></p>
        </Fade>
      </div>
    )
  }
}

export default Color;