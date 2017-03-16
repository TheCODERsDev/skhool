import React from 'react';
import { Container } from 'reactstrap';
import DocumentEditor from '../components/DocumentEditor.js';

const EditDocument = ({ doc }) => (
  <Container className="EditDocument">
    <h4 className="page-header">Editing "{ doc.title }"</h4>
    <DocumentEditor doc={ doc } />
  </Container>
);

EditDocument.propTypes = {
  doc: React.PropTypes.object,
};

export default EditDocument;
