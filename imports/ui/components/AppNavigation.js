import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router';
import $ from 'jquery';
import url from 'url';
import PublicNavigation from './PublicNavigation.js';
import AuthenticatedNavigation from './AuthenticatedNavigation.js';

const renderNavigation = hasUser => (hasUser ? <AuthenticatedNavigation /> : <PublicNavigation />);
const styleNavbar = (transparent) => {
  const $font = $('.navbar-default .navbar-nav > li > a,.navbar-default .navbar-brand')
  const $navbar = $('.navbar');
  const $iconBar = $('.navbar-default .navbar-toggle .icon-bar');
  if (transparent) {
    $navbar.css({
      color: '#fff',
      background: 'transparent',
      border: '0',
    });

    $font.css('color', '#fff')
    $iconBar.css('background-color', '#fff')
  } else {
    $navbar.css({
      color: '',
      background: '',
      border: '',
    });
    $font.css('color', '')
    $iconBar.css('background-color', '')
  }
};
const isTopIndex = () => $(window).scrollTop() === 0 && url.parse(location.href).pathname === '/';

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
