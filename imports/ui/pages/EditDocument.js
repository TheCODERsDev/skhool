import React from 'react';
import { Grid } from 'react-bootstrap';
import DocumentEditor from '../components/DocumentEditor.js';

const EditDocument = ({ doc }) => (
  <Grid className="EditDocument">
    <h4 className="page-header">Editing "{ doc.title }"</h4>
    <DocumentEditor doc={ doc } />
  </Grid>
);

EditDocument.propTypes = {
  doc: React.PropTypes.object,
};

export default EditDocument;
