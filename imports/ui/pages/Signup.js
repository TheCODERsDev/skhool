import React from 'react';
import { Link } from 'react-router';
import { Row, Col, Button, FormGroup, Label, Input, Container, Alert } from 'reactstrap';
import handleSignup from '../../modules/signup';

export default class Signup extends React.Component {
  componentDidMount() {
    handleSignup({ component: this });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <Container className="Signup">
        <Row>
          <Col xs={ 12 } sm={ 6 } md={ 4 }>
            <h4 className="page-header">Sign Up</h4>
            <form
              ref={ form => (this.signupForm = form) }
              onSubmit={ this.handleSubmit }
            >
              <Row>
                <Col xs={ 6 } sm={ 6 }>
                  <FormGroup>
                    <Label>First Name</Label>
                    <Input
                      type="text"
                      ref="firstName"
                      name="firstName"
                      placeholder="First Name"
                    />
                  </FormGroup>
                </Col>
                <Col xs={ 6 } sm={ 6 }>
                  <FormGroup>
                    <Label>Last Name</Label>
                    <Input
                      type="text"
                      ref="lastName"
                      name="lastName"
                      placeholder="Last Name"
                    />
                  </FormGroup>
                </Col>
              </Row>
              <FormGroup>
                <Label>Email Address</Label>
                <Input
                  type="text"
                  ref="emailAddress"
                  name="emailAddress"
                  placeholder="Email Address"
                />
              </FormGroup>
              <FormGroup>
                <Label>Password</Label>
                <Input
                  type="password"
                  ref="password"
                  name="password"
                  placeholder="Password"
                />
              </FormGroup>
              <Button type="submit" color="success">Sign Up</Button>
            </form>
            <p>Already have an account? <Link to="/login">Log In</Link>.</p>
          </Col>
        </Row>
      </Container>
    );
  }
}
