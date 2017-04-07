import React from 'react';
import { Bert } from 'meteor/themeteorchef:bert';
import { Table, Button } from 'reactstrap';
import { Link } from 'react-router';
import { removeLesson } from '../../api/lessons/methods';

const handleRemove = ({ _id, title }) => {
  if (confirm(`Are you sure to remove ${title}`)) {
    removeLesson.callPromise({ _id })
    .then(() => Bert.alert('Course deleted!', 'success'))
    .catch(error => Bert.alert(error.message, 'danger'));
  }
};

export default class LessonList extends React.Component {
  render() {
    return (<Table>
      <thead>
        <tr>
          <th>#</th>
          <th>Lesson</th>
        </tr>
      </thead>
      <tbody>
        { this.props.lessons.map((lesson, index) => (
          <tr key={ lesson._id }>
            <td>{ index + 1 }</td>
            <td><Link to={ `/courses/${lesson.course}/lessons/${lesson._id}` }>{ lesson.title }</Link></td>
            { this.props.editable ? (
              <td>
                <Button color="danger" onClick={ () => handleRemove(lesson) }>
                  <i className="fa fa-trash"></i>
                </Button>
              </td>
            ) : null }
          </tr>
        )) }
      </tbody>
    </Table>);
  }
}

LessonList.propTypes = {
  lessons: React.PropTypes.array,
  editable: React.PropTypes.bool,
};
