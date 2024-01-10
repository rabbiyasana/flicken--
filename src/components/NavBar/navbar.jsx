import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Image } from "react-bootstrap";
import logo from "../../assets/images/logo-snap.png";
import logotxt from "../../assets/images/flicken-txt.jpg";

import ContactButton from "../ContactButton/ContactButton";

import "./navbar.css";
function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" className="navbar-light">
      <Container>
        <Navbar.Brand href="#home">
          <Image src={logo} width={"54px"} alt="" />{" "}
          <Image src={logotxt} width={"170px"} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav">
          <Image
            src="src/assets/images/toggle.svg"
            width={"20px"}
            alt=""
            aria-controls="responsive-navbar-nav"
            className="toggle-button"
          />
        </Navbar.Toggle>

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link href="#" className="text-white">
              Home
            </Nav.Link>
            <Nav.Link href="#about" className="text-white">
              {" "}
              About{" "}
            </Nav.Link>
            <Nav.Link href="#services" className="text-white">
              {" "}
              Services{" "}
            </Nav.Link>
            <Link to="/career" className="text-white">
              {" "}
              Career{" "}
            </Link>
            <Nav.Link href="#memes">
              {" "}
              <ContactButton text="Contact Us" />{" "}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
