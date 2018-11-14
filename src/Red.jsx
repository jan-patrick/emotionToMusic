import React from 'react';
import { Link } from "react-router-dom";
import Slide from '@material-ui/core/Slide';
import screen from './screens/Red.svg';
import { Events, animateScroll as scroll} from 'react-scroll'


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
    scroll.scrollMore(3500)

    Events.scrollEvent.register('begin', function () {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register('end', function () {
      console.log("end", arguments);
    });
  }

  render() {
    return (
      <div style={divStyle} >
        <Slide direction="left" in="true" mountOnEnter unmountOnExit>
          <p><Link to="/green" style={{ textDecoration: 'none', color: 'black' }}><img src={screen} alt="First" />
          </Link></p>
        </Slide>
      </div>
    )
  }
}

export default Color;