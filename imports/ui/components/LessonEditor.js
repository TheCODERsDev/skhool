/* eslint-disable max-len */

import React from 'react';
import { FormGroup, Label, Input, Button } from 'reactstrap';
import { Bert } from 'meteor/themeteorchef:bert';
import $ from './../../modules/validation';
import { formatLesson, upsertLesson } from '../../api/lessons/methods';
import LessonList from './LessonList';

const validate = (component) => {
  $(component.editor).validate({
    rules: {
      url: {
        required: true,
      },
    },
    messages: {
      url: {
        required: 'Hey!! I need url.',
      },
    },
    submitHandler() {
      const urlEle = document.querySelector('[name="url"]');
      const url = urlEle.value.trim();
      const course = component.props.course._id;
      formatLesson.callPromise({ course, url })
      .then(formatted => upsertLesson.callPromise(formatted))
      .then((res) => {
        Bert.alert(res.insertedId ? 'Lesson added!' : 'Lesson updated!', 'success');
        urlEle.value = null;
      })
      .catch(error => Bert.alert(error.message, 'danger'));
    },
  });
};

export default class CourseEditor extends React.Component {
  componentDidMount() {
    validate(this);
  }

  render() {
    return (<div>
      <form className="mb-3" ref={ form => (this.editor = form) } onSubmit={ event => event.preventDefault() } >
        <FormGroup>
          <Label>Lesson Link</Label>
          <Input type="text" name="url" placeholder="Hohoho! Just place your url here" />
        </FormGroup>
        <Button type="submit" color="success">Add Lesson</Button>
      </form>
      <LessonList lessons={ this.props.lessons } editable={ true }></LessonList>
    </div>);
  }
}

CourseEditor.propTypes = {
  lessons: React.PropTypes.array,
};
