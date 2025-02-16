import React, { useState, useRef } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

export default function AppNavbar() {

  const [expanded, setExpanded] = useState(false);
  const navbarRef = useRef(null); 

  const handleLinkClick = (id) => {
    setExpanded(false);
    const element = document.getElementById(id);
    const navbarHeihgt = navbarRef.current.offsetHeight;
    const offset = element.offsetTop - navbarHeihgt;
    window.scrollTo({ top: offset, behavior: 'smooth'});
  };

  return (
    <Navbar bg="secondary" variant="dark" expand="lg" className='m-0 sticky-top' expanded={expanded} ref={navbarRef}>
      <Container>
        <Navbar.Brand href="#home"><h2>Matlingiewicz dev</h2></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded ? false : true)}/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={() => handleLinkClick('home')}>Strona główna</Nav.Link>
            <Nav.Link onClick={() => handleLinkClick('skills')}>Umiejętności</Nav.Link>
            <Nav.Link onClick={() => handleLinkClick('contact')}>Kontakt</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}