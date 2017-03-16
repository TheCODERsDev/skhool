import React from 'react';
import { Row, Col, Button, FormGroup, Label, Input, Container, Alert } from 'reactstrap';
import handleRecoverPassword from '../../modules/recover-password';

export default class RecoverPassword extends React.Component {
  componentDidMount() {
    handleRecoverPassword({ component: this });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <Container className="RecoverPassword">
        <Row>
          <Col xs={ 12 } sm={ 6 } md={ 4 }>
            <h4 className="page-header">Recover Password</h4>
            <Alert color="info">
              Enter your email address below to receive a link to reset your password.
            </Alert>
            <form
              ref={ form => (this.recoverPasswordForm = form) }
              className="recover-password"
              onSubmit={ this.handleSubmit }
            >
              <FormGroup>
                <Input
                  type="email"
                  ref="emailAddress"
                  name="emailAddress"
                  placeholder="Email Address"
                />
              </FormGroup>
              <Button type="submit" color="success">Recover Password</Button>
            </form>
          </Col>
        </Row>
      </Container>
    );
  }
}
