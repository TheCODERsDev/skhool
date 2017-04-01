import React from 'react';
import { Container } from 'reactstrap';
import CourseEditor from '../components/CourseEditor';

const CourseNew = () => (
  <Container className="CourseNew">
    <h4 className="page-header">New Course</h4>
    <CourseEditor />
  </Container>
);

export default CourseNew;
