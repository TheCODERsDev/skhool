import React from 'react';
import { Container } from 'reactstrap';
import FlexboxGallery from './FlexboxGallery';

const CourseList = ({ courses }) => (
  <Container>
    { courses.length > 0 ? (
    <FlexboxGallery.Container>
      {courses.map(({ _id, title, thumbnail }) => (
        <FlexboxGallery.Item key={ _id } to={ `/courses/${_id}` } image={ thumbnail }>
          { title }
        </FlexboxGallery.Item>
      ))}
    </FlexboxGallery.Container>
    ) : null }
  </Container>
);

CourseList.propTypes = {
  courses: React.PropTypes.array,
};

export default CourseList;
