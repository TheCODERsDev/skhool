import React from 'react';
import { Alert, Container } from 'reactstrap';

const NotFound = () => (
  <Container className="NotFound">
    <Alert color="danger">
      <p><strong>Error [404]</strong>: { window.location.pathname } does not exist.</p>
    </Alert>
  </Container>
);

export default NotFound;
