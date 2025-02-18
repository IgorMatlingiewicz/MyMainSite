import React, { useState, useRef } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';

import contentPL from "../data/contentPL.json";
import contentEN from "../data/contentEN.json";

export default function AppNavbar({ setLanguage, language, setMode, mode }) {
  let content = language == "PL" ? contentPL : contentEN;

  const [expanded, setExpanded] = useState(false);
  const navbarRef = useRef(null);

  const handleLinkClick = (id) => {
    setExpanded(false);

    if (id === "home") {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const element = document.getElementById(id);
    const navbarHeight = navbarRef.current.offsetHeight;
    const offset = element.offsetTop - navbarHeight;

    window.scrollTo({ top: offset, behavior: 'smooth' });
  };
  return (
    <Navbar bg={mode == "dark" ? "secondary" : "primary"} variant="dark" expand="lg" className='m-0 sticky-top' expanded={expanded} ref={navbarRef}>
      <Container>
        <Navbar.Brand className="cursor-pointer" onClick={() => handleLinkClick('home')}><h2>Matlingiewicz dev</h2></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded ? false : true)} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={() => handleLinkClick('home')}>{content.navbar["home"]}</Nav.Link>
            <Nav.Link onClick={() => handleLinkClick('skills')}>{content.navbar["skills"]}</Nav.Link>
            <Nav.Link onClick={() => handleLinkClick('contact')}>{content.navbar["contact"]}</Nav.Link>
          </Nav>
          <div>
            <Button variant="warning" className="mx-3" onClick={() => setMode(mode == "dark" ? "bright" : "dark")}><i class={mode == "dark" ? "bi bi-moon" : "bi bi-brightness-high"}></i></Button>
            <Button variant="warning" className="mx-3 fw-bold" onClick={() => setLanguage(language == "PL" ? "EN" : "PL")}>{language}</Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}