import React from 'react';
import { browserHistory } from 'react-router';
import { Container, ListGroup, ListGroupItem, Alert } from 'reactstrap';

const handleNav = (_id) => {
  browserHistory.push(`/courses/${_id}`);
};

const CourseList = ({ courses }) => (
  <Container>
    { courses.length > 0 ? (
    <ListGroup className="CourseList">
      {courses.map(({ _id, title }) => (
        <ListGroupItem key={ _id } onClick={ () => handleNav(_id) }>
          { title }
        </ListGroupItem>
      ))}
    </ListGroup>
    ) : (
      <Alert color="warning">No courses yet.</Alert>
    ) }
  </Container>
);

CourseList.propTypes = {
  courses: React.PropTypes.array,
};

export default CourseList;
