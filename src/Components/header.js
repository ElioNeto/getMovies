import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

class Header extends Component {  
  render() {
      return (
        <div>
          <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand>Get Movies</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/">Welcome</Nav.Link>
                <Nav.Link href="/request">Request</Nav.Link>
                <Nav.Link href="/todo">ToDo</Nav.Link>
                <Nav.Link href="/done">Done</Nav.Link>
                <Nav.Link href="/fail">Failure</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      );
  }
}
  export default Header;