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
import "./footer.css";
function Footer() {
  return (
    <>
      <Container fluid className="bg-black py-5 footer">
        <Container className="py-5">
          <Row className="py-5 mx-auto">
            <Col sm={12} lg={4}>
              <Link to="/" className="navbar-brand">
                <Image src={logo} width={"54px"} alt="" />
                <Image src={logotxt} width={"170px"} alt="" />
              </Link>
            </Col>
            <Col sm={12} lg={4}>
              <ul>
                <li>
                  <a href="">
                    <b>Links</b>
                  </a>
                </li>
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
            <Col sm={12} lg={4}>
              <ul>
                <li>
                  <a href="">
                    <b>Contact Us</b>
                  </a>
                </li>
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
        </Container>
      </Container>
    </>
  );
}
export default Footer;
