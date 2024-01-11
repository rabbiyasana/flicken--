import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import TestimonialCarousel from "../Testimonial_carousel/TestimonialCarousel";

function Testimonial() {
  return (
    <>
      <Container fluid className="py-5">
        <Container>
          <Row>
            <Col md={{ span: 6, offset: 3 }}>
              <h1 className="text-center">TESTIMONIALS</h1>
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
