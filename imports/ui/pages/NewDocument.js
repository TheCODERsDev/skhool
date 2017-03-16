import React from 'react';
import DocumentEditor from '../components/DocumentEditor.js';
import { Container } from 'reactstrap';

const NewDocument = () => (
  <Container className="NewDocument">
    <h4 className="page-header">New Document</h4>
    <DocumentEditor />
  </Container>
);

export default NewDocument;
