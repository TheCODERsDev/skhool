import React from 'react';
import { browserHistory, Link } from 'react-router';
import { Nav, NavItem, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Meteor } from 'meteor/meteor';

const handleLogout = () => Meteor.logout(() => browserHistory.push('/login'));

const userName = () => {
  const user = Meteor.user();
  const name = user && user.profile ? user.profile.name : '';
  return user ? `${name.first} ${name.last}` : '';
};

export default class AuthenticatedNavigation extends React.Component {
  render() {
    return (
      <Nav className="ml-auto" navbar>
        <NavItem>
          <Link className="nav-link" to="/courses/">Courses</Link>
        </NavItem>
        <NavItem>
          <UncontrolledDropdown>
            <DropdownToggle caret nav={ true }>
              { userName() }
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem onClick={ handleLogout }>Logout</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </NavItem>
      </Nav>
    );
  }
}
