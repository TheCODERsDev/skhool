import React from 'react';
import { Link } from 'react-router';
import { Grid, Col, Row, Button } from 'react-bootstrap';
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
        <ReactPlayer { ...props } />
      </div>
    );
  }
}
