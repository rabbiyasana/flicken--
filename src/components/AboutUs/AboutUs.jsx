import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import AboutImg from "../../assets/images/about.png";
import "./About.css";
function AboutUs() {
  return (
    <>
      <Container id="about">
        <Row>
          <Col xs={12} md={6}>
            <p style={{ color: "#EA4B23" }}>
              <strong>ABOUT US</strong>
            </p>
            <h1>
              Work with top notch designers and developers to get amazing
              products.
            </h1>
            <p>
              Flicken is a service-oriented company providing creative and
              innovative solutions for your business domain. We believe in
              exceeding your expectations by delivering thoughtfully innovated
              eye-catching products on your desk. We take a pride in engineering
              your requirements into robust software using our mobile, web,
              cloud and e-commerce capabilities.
            </p>
          </Col>
          <Col xs={12} md={6}>
            <Image src={AboutImg} alt="about" style={{ width: "100%" }} />
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default AboutUs;
