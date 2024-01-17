import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import ServiceCard from "../Card/Card";
import dataengin from "../../assets/images/data-engin.svg";
import web from "../../assets/images/web.svg";
import mobile from "../../assets/images/mobile.svg";
import devops from "../../assets/images/devops.svg";
import blockchain from "../../assets/images/blockchain.svg";
import ui_ux from "../../assets/images/ui_ux.svg";
import "./services.css";
function Services() {
  return (
    <>
      <Container
        fluid
        style={{ backgroundColor: "#000" }}
        id="services"
        className="py-5"
      >
        <Container className="">
          <Row className="text-center py-2">
            <h1 className="text-white">Our Services</h1>
          </Row>
          <Row className="justify-content-center text-center">
            <Col xs={12} sm={6} lg={3}>
              <ServiceCard
                title="Data Engineering/Data Analysis"
                text="We help you use your data to its fullest potential, delivering analytics solutions faster to enable actionable results that deliver real transformation."
                src={dataengin}
              />
            </Col>
            <Col xs={12} sm={6} lg={3}>
              <ServiceCard
                title="Web Development"
                text="We are your creative web development team, who aim to leverage the latest technological advances with thoughtful design and serious engineering to build tailored solutions for any industry."
                src={web}
              />
            </Col>

            <Col xs={12} sm={6} lg={3}>
              <ServiceCard
                title="Mobile App Development"
                text="We develop sleek looking native and hybrid mobile apps for iOS & Android to ensure the customer satisfaction and performance at the core."
                src={mobile}
              />
            </Col>
          </Row>
          <Row className="justify-content-center text-center">
            <Col xs={12} md={6} lg={3}>
              <ServiceCard
                title="DevOps"
                text="We implement highly advanced tools that are necessary to support the Continuous Delivery along with the DevOps. Our DevOps experts re-engineer your development and deployment processes by raising the quality of software development."
                src={devops}
              />
            </Col>
            <Col xs={12} md={6} lg={3}>
              <ServiceCard
                title="BlockChain"
                text="We render our blockchain services where our experts help enterprises adopt blockchain technology seamlessly through advisory & consulting services and blockchain development & maintenance services."
                src={blockchain}
              />
            </Col>

            <Col xs={12} md={6} lg={3}>
              <ServiceCard
                title="UI/UX Design"
                text="Modern, minimal and functional design has become the need for any business to gain traction with users. Using best-in-class design principles we provide our clients with innovative branding and UI/UX services."
                src={ui_ux}
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}
export default Services;
