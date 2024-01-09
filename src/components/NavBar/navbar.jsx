import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Image } from "react-bootstrap";
import ContactButton from "../ContactButton/ContactButton";
import "./navbar.css";
function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" className="navbar-light">
      <Container>
        <Navbar.Brand href="#home">
          <Image src="src/assets/images/logo-snap.png" width={"54px"} alt="" />{" "}
          <Image
            src="src/assets/images/flicken-txt.jpg"
            width={"170px"}
            alt=""
          />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="toggle-button"
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link href="#deets" className="text-white">
              Home
            </Nav.Link>
            <Nav.Link href="#memes" className="text-white">
              {" "}
              About{" "}
            </Nav.Link>
            <Nav.Link href="#memes" className="text-white">
              {" "}
              Career{" "}
            </Nav.Link>
            <Nav.Link href="#memes">
              {" "}
              <ContactButton />{" "}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
