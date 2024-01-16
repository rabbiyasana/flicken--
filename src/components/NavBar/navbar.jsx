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
  const [activeLink, setActiveLink] = useState("");

  const handleNavLinkClick = (link) => {
    setActiveLink(link);
  };
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(".nav-fixed");
      const footer = document.querySelector(".footer");
      const scrollPosition = window.scrollY;

      if (navbar && footer) {
        const footerPosition =
          footer.getBoundingClientRect().top + window.scrollY;
        const scrolled =
          scrollPosition > 100 && scrollPosition < footerPosition;

        navbar.classList.toggle("scrolled", scrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="navbar-light nav-fixed fixed"
    >
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
          <Nav className="me-auto" style={{ zIndex: 1 }}></Nav>
          <Nav>
            <Nav.Link
              href="#"
              onClick={() => handleNavLinkClick("home")}
              className={`text-white ${
                activeLink === "home" ? "active-link" : "active-link"
              }`}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#about"
              onClick={() => handleNavLinkClick("about")}
              className={`text-white ${
                activeLink === "about" ? "active-link" : ""
              }`}
            >
              {" "}
              About{" "}
            </Nav.Link>
            <Nav.Link
              href="#services"
              onClick={() => handleNavLinkClick("services")}
              className={`text-white ${
                activeLink === "services" ? "active-link" : ""
              }`}
            >
              {" "}
              Services{" "}
            </Nav.Link>
            <Nav.Link>
              <Link
                to="/career"
                onClick={() => handleNavLinkClick("career")}
                className={`text-white text-decoration-none ${
                  activeLink === "career" ? "active-link" : ""
                }`}
              >
                {" "}
                Career{" "}
              </Link>
            </Nav.Link>
            <Link
              to="/contact"
              onClick={() => handleNavLinkClick("contact")}
              className={`active-link ${
                activeLink === "contact" ? "active-link" : ""
              }`}
            >
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
