import React from 'react';
import { Link } from 'react-router';
import { Row, Col, Button, Grid } from 'react-bootstrap';
import DocumentsList from '../containers/DocumentsList.js';

const Documents = () => (
  <Grid className="Documents">
    <Row>
      <Col xs={ 12 }>
        <div className="page-header clearfix">
          <h4 className="pull-left">Documents</h4>
          <Link to="/documents/new">
            <Button
              bsStyle="success"
              className="pull-right"
            >New Document</Button>
          </Link>
        </div>
        <DocumentsList />
      </Col>
    </Row>
  </Grid>
);

export default Documents;