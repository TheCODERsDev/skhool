import React from 'react';
import { Alert, Grid } from 'react-bootstrap';

const NotFound = () => (
  <Grid className="NotFound">
    <Alert bsStyle="danger">
      <p><strong>Error [404]</strong>: { window.location.pathname } does not exist.</p>
    </Alert>
  </Grid>
);

export default NotFound;
