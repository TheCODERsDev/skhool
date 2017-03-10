import React from 'react';
import DocumentEditor from '../components/DocumentEditor.js';
import { Grid } from 'react-bootstrap';

const NewDocument = () => (
  <Grid className="NewDocument">
    <h4 className="page-header">New Document</h4>
    <DocumentEditor />
  </Grid>
);

export default NewDocument;
