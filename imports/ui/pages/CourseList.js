import React from 'react';
import { Link } from 'react-router';
import { Row, Col, Button, Container } from 'reactstrap';
import CourseList from '../containers/CourseList';

const Courses = () => (
  <Container className="Courses">
    <Row>
      <Col xs={ 12 }>
        <div className="page-header clearfix">
          <h4 className="pull-left">Courses</h4>
          <Link to="/courses/new">
            <Button
              color="success"
              className="pull-right"
            >New Course</Button>
          </Link>
        </div>
        <CourseList />
      </Col>
    </Row>
  </Container>
);

export default Courses;
