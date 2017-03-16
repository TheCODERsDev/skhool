import React from 'react';
import { Row, Col, Button, FormGroup, Label, Input, Container, Alert } from 'reactstrap';
import handleResetPassword from '../../modules/reset-password';

export default class ResetPassword extends React.Component {
  componentDidMount() {
    handleResetPassword({ component: this, token: this.props.params.token });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <Container className="ResetPassword">
        <Row>
          <Col xs={ 12 } sm={ 6 } md={ 4 }>
            <h4 className="page-header">Reset Password</h4>
            <Alert color="info">
              To reset your password, enter a new one below. You will be logged in
    with your new password.
            </Alert>
            <form
              ref={ form => (this.resetPasswordForm = form) }
              className="reset-password"
              onSubmit={ this.handleSubmit }
            >
              <FormGroup>
                <Label>New Password</Label>
                <Input
                  type="password"
                  ref="newPassword"
                  name="newPassword"
                  placeholder="New Password"
                />
              </FormGroup>
              <FormGroup>
                <Label>Repeat New Password</Label>
                <Input
                  type="password"
                  ref="repeatNewPassword"
                  name="repeatNewPassword"
                  placeholder="Repeat New Password"
                />
              </FormGroup>
              <Button type="submit" color="success">Reset Password &amp; Login</Button>
            </form>
          </Col>
        </Row>
      </Container>
    );
  }
}

ResetPassword.propTypes = {
  params: React.PropTypes.object,
};
