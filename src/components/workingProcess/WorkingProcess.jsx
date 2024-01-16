import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import ProcessBoxLeft from "../ProcessCard/ProcessBoxLeft";
import "./WorkingProcess.css";
import ProcessBoxRight from "../ProcessCard/ProcessBoxRight";
function WorkingProcess() {
  return (
    <>
      <Container fluid className="py-5 main">
        <Container>
          {/* heading row */}
          <Row className="text-center">
            <Col>
              <h1>Our Working Process</h1>
            </Col>
          </Row>
          {/* project scoping box row */}
          <Row className="my-5">
            <Col xs={12} md={5}>
              <ProcessBoxLeft
                heading="Project Scoping"
                content={
                  "We engage our clients to fully understand and scope project requirements so we can set realistic expectations. At FLICKEN we aim to build products that reflect your values and brand identity."
                }
              />
            </Col>
            <Col xs={12} md={2}>
              {" "}
            </Col>
            <Col xs={12} md={5} className="position-relative">
              <div className="process-point-right-first"></div>
            </Col>
          </Row>

          {/* ui/ux design row */}
          <Row className="my-5">
            <Col xs={12} md={5} className="position-relative">
              <div className="process-point-left-second"></div>
            </Col>
            <Col xs={12} md={2}>
              {" "}
            </Col>
            <Col xs={12} md={5}>
              <div className="process-point-left-first bg-danger"></div>
              <ProcessBoxRight
                heading="UI/UX Design"
                content={
                  "Using agile development, we take an iterative approach to provide clients with personas, wireframes and prototypes. Our clients get a feel for what the end product will look like and can provide us with real time feedback to save on unnecessary development costs."
                }
              />
            </Col>
          </Row>
          {/* third row */}
          <Row className="my-5">
            <Col xs={12} md={5}>
              <ProcessBoxLeft
                heading="Development"
                content={
                  "With the prototype finalized and approved, we kick start the development process with clear milestones for deliverables. We operate a lean, agile shop and work with clients to define an iterative delivery process. Client engagement is one of our key drivers for successful project execution."
                }
              />
            </Col>
            <Col xs={12} md={2}>
              {" "}
            </Col>
            <Col xs={12} md={5} className="position-relative">
              <div className="process-point-right-first"></div>
            </Col>
          </Row>

          {/* fourth row */}
          <Row className="my-5">
            <Col xs={12} md={5} className="position-relative">
              <div className="process-point-left-second"></div>
            </Col>
            <Col xs={12} md={2}>
              {" "}
            </Col>
            <Col xs={12} md={5}>
              <div className="process-point-left-first bg-danger"></div>
              <ProcessBoxRight
                heading="Evaluation"
                content={
                  "We provide systematic and objective assessment of an on-going or completed project, programme or policy its design, implementation and results. The aim is to determine the relevance and fulfillment of objectives, development efficiency, effectiveness, impact and sustainability"
                }
              />
            </Col>
          </Row>

          {/* support row */}
          <Row className="my-5">
            <Col xs={12} md={5}>
              <ProcessBoxLeft
                heading="Support"
                content={
                  "Our relationship with clients does not end with product handover. We are here to provide your business with reliable and timely support needed to ensure that there are zero disruptions with the products we build."
                }
              />
            </Col>
            <Col xs={12} md={2}>
              {" "}
            </Col>
            <Col xs={12} md={5} className="position-relative">
              <div className="process-point-right-last"></div>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}
export default WorkingProcess;
