import React from 'react';
import { Link } from 'react-router';
import $ from 'jquery';
import url from 'url';
import { Collapse, Navbar, NavbarToggler } from 'reactstrap';
import PublicNavigation from './PublicNavigation.js';
import AuthenticatedNavigation from './AuthenticatedNavigation.js';

const renderNavigation = hasUser => (hasUser ? <AuthenticatedNavigation /> : <PublicNavigation />);

class AppNavigation extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      hasUser: null,
      isOpen: false
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ hasUser: nextProps.hasUser });
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>
        <Navbar color="faded" light toggleable fixed="top">
          <NavbarToggler right onClick={this.toggle} />
          <Link to="/" className="navbar-brand">Skhool</Link>
          <Collapse isOpen={this.state.isOpen} navbar>
            { renderNavigation(this.state.hasUser) }
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

AppNavigation.propTypes = {
  hasUser: React.PropTypes.object,
};

export default AppNavigation;
