import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

export default function AppNavbar() {
  return (
    <Navbar bg="secondary" variant="dark" expand="lg" className='m-0'>
      <Container>
        <Navbar.Brand href="#home"><h2>Matlingiewicz dev</h2></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Strona główna</Nav.Link>
            <Nav.Link href="#about">Umiejętności</Nav.Link>
            <Nav.Link href="#contact">Kontakt</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}