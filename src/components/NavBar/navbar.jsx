import React, { useState, useEffect } from "react";
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
  const [activeLink, setActiveLink] = useState("home");

  const handleNavLinkClick = (link) => {
    setActiveLink(link);
  };
  const header = document.querySelector(".header");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("black-bg");
      header.classList.remove("transparent");
    } else {
      header.classList.remove("black-bg");
      header.classList.add("transparent");
    }
  });
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="navbar-light header transparent "
    >
      <Container className="px-5">
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
          <Nav className="me-auto" style={{ zIndex: 1 }}></Nav>
          <Nav>
            <Nav.Link
              href="#"
              onClick={() => handleNavLinkClick("home")}
              className={`text-white ${
                activeLink === "home" ? "nav_border px-3" : ""
              }`}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#about"
              onClick={() => handleNavLinkClick("about")}
              className={`text-white px-3 ${
                activeLink === "about" ? "nav_border" : ""
              }`}
            >
              {" "}
              About{" "}
            </Nav.Link>
            <Nav.Link
              href="#services"
              onClick={() => handleNavLinkClick("services")}
              className={`text-white px-3  ${
                activeLink === "services" ? "nav_border" : ""
              }`}
            >
              {" "}
              Services{" "}
            </Nav.Link>
            <Nav.Link>
              <Link
                to="/career"
                onClick={() => handleNavLinkClick("career")}
                className={`text-white text-decoration-none px-3  ${
                  activeLink === "career" ? "nav_border" : ""
                }`}
              >
                {" "}
                Career{" "}
              </Link>
            </Nav.Link>
            <Link to="/contact" onClick={() => handleNavLinkClick("contact")}>
              {" "}
              <ContactButton text="Contact Us" />{" "}
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
