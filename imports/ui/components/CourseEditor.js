/* eslint-disable max-len, no-return-assign */

import React from 'react';
import { FormGroup, Label, Input, Button } from 'reactstrap';
import { browserHistory } from 'react-router';
import { Bert } from 'meteor/themeteorchef:bert';
import { upsertCourse } from '../../api/courses/methods';
import $ from '../../modules/validation';

const handleUpsert = (component) => {
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

const validate = (component) => {
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
    submitHandler() { handleUpsert(component); },
  });
};

export default class CourseEditor extends React.Component {
  componentDidMount() {
    validate(this);
    setTimeout(() => { document.querySelector('[name="title"]').focus(); }, 0);
  }

  render() {
    const { doc } = this.props;
    return (<form
      ref={ form => (this.editor = form) }
      onSubmit={ event => event.preventDefault() }
    >
      <FormGroup>
        <Label>Title</Label>
        <Input
          type="text"
          name="title"
          defaultValue={ doc && doc.title }
          placeholder="Oh, The Places You'll Go!"
        />
      </FormGroup>
      <FormGroup>
        <Label>Body</Label>
        <Input
          style={{ height: '200px' }}
          type="textarea"
          name="body"
          defaultValue={ doc && doc.body }
          placeholder="Congratulations! Today is your day. You're off to Great Places! You're off and away!"
        />
      </FormGroup>
      <Button type="submit" color="success">
        { doc && doc._id ? 'Save Changes' : 'Add Course' }
      </Button>
    </form>);
  }
}

CourseEditor.propTypes = {
  doc: React.PropTypes.object,
};
