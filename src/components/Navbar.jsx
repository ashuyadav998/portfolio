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
      className={`py-3 ${scrolled ? "bg-dark shadow-sm" : "bg-transparent"}`}
      variant="dark"
    >
      <Container>
        <Navbar.Brand href="#hero" className="fw-bold text-warning fs-4 d-flex align-items-center">
  <img
    src="/src/assets/logo-ashu_2.png"
    alt="Logo"
    className="d-inline-block align-top"
    style={{ height: "40px", width: "auto" }} // Ajusta tamaño aquí
  />
</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="ms-auto fw-semibold">
            <Nav.Link href="#hero" className="text-white">Home</Nav.Link>
            <Nav.Link href="#about" className="text-white">About</Nav.Link>
            <Nav.Link href="#resume" className="text-white">Resume</Nav.Link>
            <Nav.Link href="#projects" className="text-white">Projects</Nav.Link>
            <Nav.Link href="#contact" className="text-white">Contact</Nav.Link>
          </Nav>
        
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
