import React from 'react';
import { Link } from 'react-router';
import { Row, Col, Button, FormGroup, Label, Input, Container } from 'reactstrap';
import handleLogin from '../../modules/login';

export default class Login extends React.Component {
  componentDidMount() {
    handleLogin({ component: this });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <Container className="Login">
        <Row>
          <Col xs={ 12 } sm={ 6 } md={ 4 }>
            <h4 className="page-header">Login</h4>
            <form
              ref={ form => (this.loginForm = form) }
              className="login"
              onSubmit={ this.handleSubmit }
            >
              <FormGroup>
                <Label>Email Address</Label>
                <Input
                  type="email"
                  ref="emailAddress"
                  name="emailAddress"
                  placeholder="Email Address"
                />
              </FormGroup>
              <FormGroup>
                <Label>
                  <span className="pull-left">Password</span>
                  <Link className="pull-right" to="/recover-password">Forgot Password?</Link>
                </Label>
                <Input
                  type="password"
                  ref="password"
                  name="password"
                  placeholder="Password"
                />
              </FormGroup>
              <Button type="submit" color="success">Login</Button>
            </form>
          </Col>
        </Row>
      </Container>
    );
  }
}
