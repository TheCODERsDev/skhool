import React from 'react';
import { browserHistory } from 'react-router';
import { Button } from 'reactstrap';
import { Meteor } from 'meteor/meteor';

export default class FacebookLogin extends React.Component {
  loginWithFacebook() {
    Meteor.loginWithFacebook({
      requestPermissions: ['public_profile', 'email'],
    }, () => browserHistory.push('/'));
  }

  render() {
    return (
      <Button type="button" color="primary" onClick={ () => this.loginWithFacebook() } style={{ backgroundColor: '#3b5998' }}>
        <i className="fa fa-facebook-official"></i> Continue with Facebook
      </Button>
    );
  }
}
