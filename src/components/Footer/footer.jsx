import { Container, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import "./footer.css";
function Footer() {
  return (
    <>
      <Container fluid className="bg-black py-5">
        <Container className="py-5">
          <Row className="py-5 mx-auto">
            <Col sm={12} lg={4}>
              <Link to="/" className="navbar-brand">
                <Image
                  src="src/assets/images/logo-snap.png"
                  width={"54px"}
                  alt=""
                />
                <Image
                  src="src/assets/images/flicken-txt.jpg"
                  width={"170px"}
                  alt=""
                />
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
                <li> 423, F-block, Johar Town, Lahore, Pakistan</li>
                <li> +92 423 320750</li>
                <li> info@flicken.io</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}
export default Footer;
