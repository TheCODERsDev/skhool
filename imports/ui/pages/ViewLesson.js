import React from 'react';
import { Link } from 'react-router';
import { Grid, Col, Row, Button, Navbar } from 'react-bootstrap';
import ReactPlayer from 'react-player'

export default class ViewLesson extends React.Component {
  render() {
    const props = {
      width: '100%',
      height: 'calc(100vh - 50px)',
      url: 'https://www.youtube.com/watch?v=AuzyODgWRp4',
      controls: true,
      playing: true,
    }
    return (
      <div className="ViewLesson">
        <Navbar fixedTop collapseOnSelect={ true } onToggle={ this.toggle }>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/course"><i className="fa fa-list"></i> Back to course</Link>
            </Navbar.Brand>
            <div className="navbar-toolbox">
              <div className="btn-group" role="group">
                <Button bsStyle="default"><i className="fa fa-step-backward"></i></Button>
                <Button bsStyle="warning"><i className="fa fa-step-forward"></i> Continue</Button>
              </div>
            </div>
          </Navbar.Header>
        </Navbar>
        <ReactPlayer { ...props } />
      </div>
    );
  }
}
