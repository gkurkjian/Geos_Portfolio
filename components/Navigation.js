'use client';

import { Navbar, Container, Nav } from 'react-bootstrap';

export default function Navigation() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Container>
        <a href="#home" className="navbar-brand">GEORGE K.</a>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <a href="#about" className="nav-link">ABOUT</a>
            <a href="#experience" className="nav-link">EXPERIENCE</a>
            <a href="#skills" className="nav-link">SKILLS</a>
            <a href="#projects" className="nav-link">PROJECTS</a>
            <a href="#contact" className="nav-link">CONTACT</a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
