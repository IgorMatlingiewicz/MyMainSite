import { useState, useRef, useEffect } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';

import contentPL from "../data/contentPL.json";
import contentEN from "../data/contentEN.json";

export default function AppNavbar({ setLanguage, language, setMode, mode }) {
  let content = language === "PL" ? contentPL : contentEN;

  const [expanded, setExpanded] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [introReady, setIntroReady] = useState(false);
  const navbarRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setIntroReady(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'skills', 'projects', 'contact'];

      const isAtBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 60;
      if (isAtBottom) {
        setActiveSection('contact');
        return;
      }

      const scrollPosition = window.scrollY + navbarRef.current.offsetHeight + 50;
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <Navbar bg={mode === "dark" ? "secondary" : "primary"} variant="dark" expand="lg" className='m-0 sticky-top' expanded={expanded} ref={navbarRef}>
      <Container>
        <Navbar.Brand className="cursor-pointer fw-bold fs-4" onClick={() => handleLinkClick('home')}>Igor Matlingiewicz</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded ? false : true)} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className={`nav-link-animated ${activeSection === 'home' ? 'active' : ''}`} onClick={() => handleLinkClick('home')}>{content.navbar["home"]}</Nav.Link>
            <Nav.Link className={`nav-link-animated ${activeSection === 'skills' ? 'active' : ''}`} onClick={() => handleLinkClick('skills')}>{content.navbar["skills"]}</Nav.Link>
            <Nav.Link className={`nav-link-animated ${activeSection === 'projects' ? 'active' : ''}`} onClick={() => handleLinkClick('projects')}>{content.navbar["projects"]}</Nav.Link>
            <Nav.Link className={`nav-link-animated ${activeSection === 'contact' ? 'active' : ''}`} onClick={() => handleLinkClick('contact')}>{content.navbar["contact"]}</Nav.Link>
          </Nav>
          <div>
            <Button variant="" size="sm" className={`navbar-btn navbar-icon-btn${introReady ? ' navbar-btn-intro' : ''}`} onClick={() => setMode(mode === "dark" ? "light" : "dark")}>
              <span className="icon-default"><i className={mode === "dark" ? "bi bi-moon" : "bi bi-brightness-high"}></i></span>
              <span className="icon-hover"><i className={mode === "dark" ? "bi bi-brightness-high" : "bi bi-moon"}></i></span>
            </Button>
            <Button variant="" size="sm" className={`navbar-btn navbar-icon-btn ms-2${introReady ? ' navbar-btn-intro navbar-btn-intro-delay' : ''}`} onClick={() => setLanguage(language === "PL" ? "EN" : "PL")}>
              <span className="icon-default">{language}</span>
              <span className="icon-hover">{language === "PL" ? "EN" : "PL"}</span>
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}