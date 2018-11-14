import React from 'react';
import { Link } from "react-router-dom";
import Slide from '@material-ui/core/Slide';
import Button from '@material-ui/core/Button';
import RedoIcon from '@material-ui/icons/Replay';

var body = document.body;
var html = document.documentElement;
var docHeight = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);

class Result extends React.Component {

  constructor() {
    super();
    this.state = {
      redirectToReferrer: false
    }
  }

  render() {
    return (
      <div style={{ backgroundColor: "rgb(200,255,0)", height: docHeight}}>
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