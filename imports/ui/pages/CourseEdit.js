import React from 'react';
import { Container } from 'reactstrap';
import CourseEditor from '../components/CourseEditor';
import LessonEditor from '../components/LessonEditor';

const CourseEdit = ({ doc, lessons }) => (
  <Container className="CourseEdit">
    <h4 className="page-header">Editing "{ doc.title }"</h4>
    <CourseEditor doc={ doc } />
    <hr />
    <h4>Lessons</h4>
    <LessonEditor course={ doc } lessons={ lessons } />
  </Container>
);

CourseEdit.propTypes = {
  doc: React.PropTypes.object,
  lessons: React.PropTypes.array,
};

export default CourseEdit;
