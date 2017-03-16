import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Nav, NavItem } from 'reactstrap';
import { Link } from 'react-router';


const PublicNavigation = () => (
  <Nav className="ml-auto" navbar>
    <NavItem>
      <Link className="nav-link" to="/signup">Sign Up</Link>
    </NavItem>
    <NavItem>
      <Link className="nav-link" to="/login">Log In</Link>
    </NavItem>
  </Nav>
);

export default PublicNavigation;
