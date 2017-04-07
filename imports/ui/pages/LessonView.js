import React from 'react';
import { Link } from 'react-router';
import { Navbar, Button, ButtonGroup } from 'reactstrap';
import ReactPlayer from 'react-player';
import { Meteor } from 'meteor/meteor';
import { composeWithTracker } from 'react-komposer';
import Lessons from '../../api/lessons';
import Loading from '../components/Loading';


const composer = ({ params }, onData) => {
  const subscription = Meteor.subscribe('lessons.view', params._id);

  if (subscription.ready()) {
    const doc = Lessons.findOne(params._id);
    onData(null, { doc });
  }
};

const navbarStyle = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'nowrap',
  alignItems: 'center',
  justifyContent: 'space-between',
};

class LessonView extends React.Component {
  render() {
    const { link, course } = this.props.doc;
    const props = {
      width: '100%',
      height: 'calc(100vh - 50px)',
      url: link,
      controls: true,
      playing: true,
    };

    return (
      <div className="LessonView">
        <Navbar color="faded" light toggleable fixed="top" style={navbarStyle}>
          <Link to={ `/courses/${course}` } className="navbar-brand"><i className="fa fa-arrow-left"></i> Back</Link>
          <ButtonGroup>
            <Button disabled color="info" size="sm"><i className="fa fa-step-backward"></i></Button>
            <Button disabled color="primary" size="sm"><i className="fa fa-step-forward"></i> Continue</Button>
          </ButtonGroup>
        </Navbar>
        <ReactPlayer { ...props } />
      </div>
    );
  }
}

LessonView.propTypes = {
  doc: React.PropTypes.object,
};

export default composeWithTracker(composer, Loading)(LessonView);
