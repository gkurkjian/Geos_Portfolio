'use client';

import { Navbar, Container, Nav } from 'react-bootstrap';
import Link from 'next/link';

export default function Navigation() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Link href="/" className="navbar-brand">GEORGE K.</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link href="/about" className="nav-link">ABOUT</Link>
            <Link href="/experiences" className="nav-link">EXPERIENCES</Link>
            <Link href="/skills" className="nav-link">SKILLS</Link>
            <Link href="/projects" className="nav-link">PROJECT</Link>
            <Link href="/contact" className="nav-link">CONTACT</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}