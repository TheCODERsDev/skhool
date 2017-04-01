import React from 'react';
import { Container } from 'reactstrap';
import CourseEditor from '../components/CourseEditor';

const CourseEdit = ({ doc }) => (
  <Container className="CourseEdit">
    <h4 className="page-header">Editing "{ doc.title }"</h4>
    <CourseEditor doc={ doc } />
  </Container>
);

CourseEdit.propTypes = {
  doc: React.PropTypes.object,
};

export default CourseEdit;
