import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import NavBar from "../NavBar/navbar";
import CarouselVideo from "../../assets/images/carousel video.mp4";
import ContactButton from "../ContactButton/ContactButton";
import "./carousel.css";
export default function () {
  const linkStyle = {
    color: "white",
  };
  return (
    <>
      <Container fluid id="carousel">
        <Row>
          <Col className="text-center">
            <NavBar />
            <div className=" my-5 text-white main-carousel">
              <div className="content ">
                <h1> Empowering the Innovations.</h1>
                <p>
                  Flicken provides dedicated remote teams that work closely with
                  you to design and build your idea.
                </p>
                <Link to="/contact" className="nav-link" style={linkStyle}>
                  <ContactButton text="Contact Us" />
                </Link>
              </div>
              <video autoPlay muted loop className="background-video">
                <source src={CarouselVideo} type="video/mp4" />
              </video>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
