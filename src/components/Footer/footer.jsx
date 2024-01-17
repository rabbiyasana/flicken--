import { Container, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import logo from "../../assets/images/logo-snap.png";
import logotxt from "../../assets/images/flicken-txt.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faAt,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./footer.css";
function Footer() {
  return (
    <>
      <Container fluid className="bg-black py-2 footer">
        <Container className="py-5">
          <Row className="py-1 footer-row mx-auto">
            <Col sm={12} lg={6}>
              <Link to="/" className="navbar-brand">
                <Image src={logo} height={"140px"} alt="" />
                <Image src={logotxt} height={"60px"} alt="" />
              </Link>
            </Col>
            <Col sm={12} lg={3}>
              <ul>
                <li>
                  <a href="">
                    <b>Links</b>
                  </a>
                </li>
                <br />
                <li>
                  {" "}
                  <a href="/home">Home</a>
                </li>
                <li>
                  {" "}
                  <a href="#">About</a>
                </li>
                <li>
                  {" "}
                  <a href="#">Services</a>
                </li>
                <li>
                  {" "}
                  <a href="#">Career</a>
                </li>
              </ul>
            </Col>
            <Col sm={12} lg={3}>
              <ul>
                <li>
                  <a href="">
                    <strong>
                      {" "}
                      <b>Contact Us</b>
                    </strong>
                  </a>
                </li>
                <br />
                <li>
                  <FontAwesomeIcon icon={faLocationDot} /> 423, F-block, Johar
                  Town, Lahore, Pakistan
                </li>
                <li>
                  {" "}
                  <FontAwesomeIcon icon={faPhone} /> +92 423 320750
                </li>
                <li>
                  {" "}
                  <FontAwesomeIcon icon={faAt} /> info@flicken.io
                </li>
              </ul>
            </Col>
          </Row>
          <Row className="px-5 pt-2 mx-auto">
            <Col xs={12} lg={8}>
              <p className="p mx-5 px-5">Flicken © 2024 All rights reserved.</p>
            </Col>
            <Col xs={12} lg={4} className="text-center">
              <a href="https://www.linkedin.com/company/flicken/">
                <FontAwesomeIcon icon={faLinkedin} style={{ color: "white" }} />
              </a>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}
export default Footer;
