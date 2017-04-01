import React from 'react';
import { Button, Container, ButtonGroup, ButtonToolbar } from 'reactstrap';
import { browserHistory } from 'react-router';
import { Bert } from 'meteor/themeteorchef:bert';
import { removeCourse } from '../../api/courses/methods';

const handleEdit = (_id) => {
  browserHistory.push(`/courses/${_id}/edit`);
};

const handleRemove = (_id) => {
  if (confirm('Are you sure? This is permanent!')) {
    removeCourse.call({ _id }, (error) => {
      if (error) {
        Bert.alert(error.reason, 'danger');
      } else {
        Bert.alert('Course deleted!', 'success');
        browserHistory.push('/courses');
      }
    });
  }
};

const CourseView = ({ doc }) => (
  <Container className="CourseView">
    <div className="page-header clearfix">
      <h4 className="pull-left">{ doc && doc.title }</h4>
      <ButtonToolbar className="pull-right">
        <ButtonGroup size="small">
          <Button onClick={ () => handleEdit(doc._id) }>Edit</Button>
          <Button onClick={ () => handleRemove(doc._id) } className="text-danger">Delete</Button>
        </ButtonGroup>
      </ButtonToolbar>
    </div>
    { doc && doc.body }
  </Container>
);

CourseView.propTypes = {
  doc: React.PropTypes.object,
};

export default CourseView;
