/* eslint-disable max-len, no-return-assign */

import React from 'react';
import { FormGroup, Label, Input, Button } from 'reactstrap';
import courseEditor from '../../modules/course-editor';

export default class CourseEditor extends React.Component {
  componentDidMount() {
    courseEditor({ component: this });
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
