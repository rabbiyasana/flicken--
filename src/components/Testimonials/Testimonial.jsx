import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import TestimonialCarousel from "../Testimonial_carousel/TestimonialCarousel";

function Testimonial() {
  return (
    <>
      <Container fluid className="py-5">
        <Container>
          <Row>
            <Col
              md={{ span: 10, offset: 1 }}
              // style={{
              //   backgroundColor: "#EA4B23",
              // }}
            >
              <h1 className="text-center" style={{ fontSize: "2rem" }}>
                TESTIMONIALS
              </h1>
              <div
                className="mx-auto"
                style={{
                  width: "40%",
                  // color: "#EA4B23",
                  height: "5px",
                  backgroundColor: "#EA4B23",
                }}
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
