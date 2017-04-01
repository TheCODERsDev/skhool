/* eslint-disable no-undef */

import { browserHistory } from 'react-router';
import { Bert } from 'meteor/themeteorchef:bert';
import { upsertCourse } from '../api/courses/methods';
import './validation';

let component;

const handleUpsert = () => {
  const { doc } = component.props;
  const confirmation = doc && doc._id ? 'Course updated!' : 'Course added!';
  const upsert = {
    title: document.querySelector('[name="title"]').value.trim(),
    body: document.querySelector('[name="body"]').value.trim(),
  };

  if (doc && doc._id) upsert._id = doc._id;

  upsertCourse.call(upsert, (error, response) => {
    if (error) {
      Bert.alert(error.reason, 'danger');
    } else {
      component.editor.reset();
      Bert.alert(confirmation, 'success');
      browserHistory.push(`/courses/${response.insertedId || doc._id}`);
    }
  });
};

const validate = () => {
  $(component.editor).validate({
    rules: {
      title: {
        required: true,
      },
      body: {
        required: true,
      },
    },
    messages: {
      title: {
        required: 'Need a title in here, Seuss.',
      },
      body: {
        required: 'This thneeds a body, please.',
      },
    },
    submitHandler() { handleUpsert(); },
  });
};

export default function courseEditor(options) {
  component = options.component;
  validate();
}
