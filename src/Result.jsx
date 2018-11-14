import React from 'react';
import { Link } from "react-router-dom";
import Slide from '@material-ui/core/Slide';
import Button from '@material-ui/core/Button';
import RedoIcon from '@material-ui/icons/Replay';

var body = document.body;
    var html = document.documentElement;
    var docHeight = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );

const divStyle = {
  margin: `none`,
  padding: `none`,
  backgroundColor: `rgb(219,223,3)`,
  height: docHeight,
}

class Result extends React.Component {

  constructor() {
    super();
    this.state = {
      redirectToReferrer: false
    }
  }

  render() {
    return (
      <div style={divStyle}>
        <Slide direction="left" in="true" mountOnEnter unmountOnExit>
          <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
            <Button variant="fab" color="secondary" aria-label="Add" className="button" style={{ padding: '30', margin: '10%', marginTop: '130%' }} fontSize="large">
              <RedoIcon className="add" />
            </Button>
          </Link>
        </Slide>
      </div>
    )
  }
}

export default Result;