/* eslint-disable max-len, no-return-assign */

import React from 'react';
import { FormGroup, Label, Input, Button, Table } from 'reactstrap';
import { Bert } from 'meteor/themeteorchef:bert';
import $ from './../../modules/validation.js';
import { formatLesson, upsertLesson, removeLesson } from '../../api/lessons/methods';

const validate = (component) => {
  $(component.editor).validate({
    rules: {
      link: {
        required: true,
      },
    },
    messages: {
      link: {
        required: 'Hey!! I need link.',
      },
    },
    submitHandler() {
      const linkEle = document.querySelector('[name="link"]');
      const link = linkEle.value.trim();
      const course = component.props.course._id;
      formatLesson.callPromise({ course, link })
      .then(formatted => upsertLesson.callPromise(formatted))
      .then((res) => {
        Bert.alert(res.insertedId ? 'Lesson added!' : 'Lesson updated!', 'success');
        linkEle.value = null;
      })
      .catch(error => Bert.alert(error.message, 'danger'));
    },
  });
};

const handleRemove = ({ _id, title }) => {
  if (confirm(`Are you sure to remove ${title}`)) {
    removeLesson.callPromise({ _id })
    .then(() => Bert.alert('Course deleted!', 'success'))
    .catch(error => Bert.alert(error.message, 'danger'));
  }
};

export default class CourseEditor extends React.Component {
  componentDidMount() {
    validate(this);
  }

  render() {
    return (<div>
      <form ref={ form => (this.editor = form) } onSubmit={ event => event.preventDefault() } >
        <FormGroup>
          <Label>Lesson Link</Label>
          <Input type="text" name="link" placeholder="Hohoho! Just place your link here" />
        </FormGroup>
        <Button type="submit" color="success">Add Lesson</Button>
      </form>

      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Lesson</th>
          </tr>
        </thead>
        <tbody>
          {this.props.lessons.map((lesson, index) => (
            <tr key={ lesson._id }>
              <td>{ index + 1 }</td>
              <td>{ lesson.title }</td>
              <td><Button color="danger" onClick={ () => handleRemove(lesson) }><i className="fa fa-trash"></i></Button></td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>);
  }
}

CourseEditor.propTypes = {
  lessons: React.PropTypes.array,
};
