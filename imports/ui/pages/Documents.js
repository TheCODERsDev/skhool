import React from 'react';
import { Link } from 'react-router';
import { Row, Col, Button, Container } from 'reactstrap';
import DocumentsList from '../containers/DocumentsList.js';

const Documents = () => (
  <Container className="Documents">
    <Row>
      <Col xs={ 12 }>
        <div className="page-header clearfix">
          <h4 className="pull-left">Documents</h4>
          <Link to="/documents/new">
            <Button
              color="success"
              className="pull-right"
            >New Document</Button>
          </Link>
        </div>
        <DocumentsList />
      </Col>
    </Row>
  </Container>
);

export default Documents;
