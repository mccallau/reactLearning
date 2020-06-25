import React from 'react';
import { Nav, Navbar, NavItem, Button, Form, NavDropdown, FormControl, Modal, Alert } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
import { BrowserRouter } from 'react-router-dom'
import Login from './authentication/Login.js'
import './TopNav.css'

class TopNav extends React.Component {

  render() {
    return (
      <div className="top-nav-container">
        <Navbar fixed="top" className="top-nav">
            <Navbar.Brand href="/">SPUTNIK</Navbar.Brand>
            <Nav className="ml-auto">
              <Login></Login>
            </Nav>
        </Navbar>
      </div>
  );
}
}

export default TopNav;
