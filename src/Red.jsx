import React from 'react';
import { Link } from "react-router-dom";
import Slide from '@material-ui/core/Slide';
import screen from './screens/Red.svg';
import { Events, animateScroll as scroll} from 'react-scroll';


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

    window.addEventListener('scroll', this.handleScroll);
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
    var docHeight = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight )-window.innerHeight+1;
    var percent = scroll.y/docHeight;
    percent = Math.min(1,Math.max(percent, 0))*100;
    console.log(percent);
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