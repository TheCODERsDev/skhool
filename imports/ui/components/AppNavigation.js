import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router';
import $ from 'jquery';
import url from 'url';
import PublicNavigation from './PublicNavigation.js';
import AuthenticatedNavigation from './AuthenticatedNavigation.js';

const renderNavigation = hasUser => (hasUser ? <AuthenticatedNavigation /> : <PublicNavigation />);
const isTopIndex = () => $(window).scrollTop() === 0 && url.parse(location.href).pathname === '/';
const styleNavbar = (transparent) => {
  const $navbar = $('.navbar');
  if(transparent) {
    $navbar.addClass('navbar-transparent');
  } else {
    $navbar.removeClass('navbar-transparent');
  }
};

class AppNavigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasUser: null,
    };
  }

  componentDidMount() {
    styleNavbar(isTopIndex());
    $(window).scroll(function() {
      styleNavbar(isTopIndex())
    });
  }

  componentWillReceiveProps(nextProps) {
    styleNavbar(isTopIndex());
    this.setState({ hasUser: nextProps.hasUser });
  }

  toggle(navExpanded) {
    if(navExpanded) {
      styleNavbar(false)
    } else {
      styleNavbar(isTopIndex())
    }
  }

  render() {
    return (
      <Navbar fixedTop collapseOnSelect={ true } onToggle={ this.toggle }>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">Skhool</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          { renderNavigation(this.state.hasUser) }
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

AppNavigation.propTypes = {
  hasUser: React.PropTypes.object,
};

export default AppNavigation;
