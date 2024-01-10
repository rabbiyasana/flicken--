import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import TestimonialCarousel from "../Testimonial_carousel/TestimonialCarousel";

function Testimonial() {
  return (
    <>
      <Container fluid className="py-5">
        <Container>
          <Row className="justify-content-center">
            <Col className="text-center">
              <h1>TESTIMONIALS</h1>
              <hr
                className="mx-auto"
                style={{ width: "200px", color: "#EC5934", height: "7px" }}
              />
              <TestimonialCarousel />
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}
export default Testimonial;
