import React from 'react';
import { Link } from 'react-router';
import { Navbar, Button, ButtonGroup } from 'reactstrap';
import ReactPlayer from 'react-player'

const navbarStyle = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'nowrap',
  alignItems: 'center',
  justifyContent: 'space-between',
};

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
        <Navbar color="faded" light toggleable fixed="top" style={navbarStyle}>
          <Link to="/course" className="navbar-brand"><i className="fa fa-arrow-left"></i> Back</Link>
          <ButtonGroup>
            <Button color="info" size="sm"><i className="fa fa-step-backward"></i></Button>
            <Button color="primary" size="sm"><i className="fa fa-step-forward"></i> Continue</Button>
          </ButtonGroup>
        </Navbar>
        <ReactPlayer { ...props } />
      </div>
    );
  }
}
