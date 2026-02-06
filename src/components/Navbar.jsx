import React, { useEffect, useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Navbar
      expand="lg"
      fixed="top"
      className={`py-3 transition-all ${scrolled ? "bg-dark shadow-lg" : "bg-transparent"}`}
      variant="dark"
      style={{ fontFamily: 'Outfit', backdropFilter: scrolled ? 'blur(10px)' : 'none' }}
    >
      <Container>
        <Navbar.Brand 
          href="#hero" 
          className="fw-bold text-warning d-flex align-items-center"
          style={{ fontFamily: 'Playfair Display', fontSize: '1.5rem' }}
        >
          <img
            src="/logo-ashu_2.png"
            alt="Ashutosh Yadav"
            style={{ height: "45px", width: "auto", marginRight: '10px' }}
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" />
        
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto fw-semibold" style={{ gap: '1.5rem' }}>
            <Nav.Link href="#hero" className="text-white nav-link-custom">Home</Nav.Link>
            <Nav.Link href="#about" className="text-white nav-link-custom">About</Nav.Link>
            <Nav.Link href="#experience" className="text-white nav-link-custom">Experience</Nav.Link>
            <Nav.Link href="#projects" className="text-white nav-link-custom">Projects</Nav.Link>
            <Nav.Link href="#contact" className="text-white nav-link-custom">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}