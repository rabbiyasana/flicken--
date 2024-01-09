import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Image } from "react-bootstrap";
import ContactButton from "./ContactButton/ContactButton";
function NavBar(props) {
  const linkStyle = {
    color: "white",
  };
  const toggleStyle = {
    color: "white",
    border: "none",
  };

  return (
    <Navbar expand="lg" class="bg-dark navbar-dark" style={{ zIndex: "100" }}>
      <Container fluid className="text-white">
        <Link to="/" className="navbar-brand">
          <Image src="src/assets/images/logo-snap.png" width={"54px"} alt="" />
          <Image
            src="src/assets/images/flicken-txt.jpg"
            width={"170px"}
            alt=""
          />
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" style={toggleStyle} />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 "
            style={{ maxHeight: "100vh" }}
            navbarScroll
          >
            <Link to="/" className="nav-link" style={linkStyle}>
              Home
            </Link>
            <Link to="/About" className="nav-link" style={linkStyle}>
              About
            </Link>
            <Link to="/Services" className="nav-link" style={linkStyle}>
              Services
            </Link>
            <Link to="/career" className="nav-link" style={linkStyle}>
              Career
            </Link>
            <Link to="/contact" className="nav-link" style={linkStyle}>
              <ContactButton />
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
