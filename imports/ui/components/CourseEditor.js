/* eslint-disable max-len, no-return-assign */

import React from 'react';
import { FormGroup, Label, Input, Button, Row, Col } from 'reactstrap';
import { browserHistory } from 'react-router';
import { Bert } from 'meteor/themeteorchef:bert';
import { find } from 'lodash';
import { upsertCourse } from '../../api/courses/methods';
import $ from '../../modules/validation';

const handleUpsert = (component) => {
  const { doc, lessons } = component.props;
  const confirmation = doc && doc._id ? 'Course updated!' : 'Course added!';
  const upsert = {
    title: document.querySelector('[name="title"]').value.trim(),
    body: document.querySelector('[name="body"]').value.trim(),
  };

  if (component.state.thumbnail) {
    const { image, thumbnail } = find(lessons, { thumbnail: component.state.thumbnail });
    upsert.image = image;
    upsert.thumbnail = thumbnail;
  }

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
  constructor(props) {
    super(props);
    this.state = { thumbnail: this.props.doc ? this.props.doc.thumbnail : null };
  }

  componentDidMount() {
    validate(this);
    setTimeout(() => { document.querySelector('[name="title"]').focus(); }, 0);
  }

  setThumbnail(thumbnail) {
    this.setState({ thumbnail });
  }

  render() {
    const { doc, lessons = [] } = this.props;
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
      { lessons.length ? (
        <FormGroup>
          <Label>Image & Thumbnail</Label>
          <Row>
            { lessons.map((lesson, index) => (
              <Col sm="12" md="4" lg="3" key={ index }>
                <label className="radio-image">
                  <input type="radio" name="thumbnail" onChange={ () => this.setThumbnail(lesson.thumbnail) } checked={ this.state.thumbnail === lesson.thumbnail } />
                  <img src={ lesson.thumbnail } className="img-fluid" />
                </label>
              </Col>
            )) }
          </Row>
        </FormGroup>
      ) : null }
      <Button type="submit" color="success">
        { doc && doc._id ? 'Save Changes' : 'Add Course' }
      </Button>
    </form>);
  }
}

CourseEditor.propTypes = {
  doc: React.PropTypes.object,
  lessons: React.PropTypes.array,
};
