import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import ProcessBoxLeft from "../ProcessCard/ProcessBoxLeft";
import "./WorkingProcess.css";
function WorkingProcess() {
  return (
    <>
      <Container fluid className="py-5">
        <Container>
          <Row className="text-center">
            <Col>
              <h1>Our Working Process</h1>
            </Col>
          </Row>
          <Row className="my-5">
            <Col xs={12} md={5}>
              <ProcessBoxLeft />
            </Col>
            <Col xs={12} md={2}>
              {" "}
            </Col>
            <Col xs={12} md={5}>
              <div className="process-point-right-first bg-danger"></div>
            </Col>
          </Row>
          <Row className="my-5">
            <Col xs={12} md={5}></Col>
            <Col xs={12} md={2}>
              {" "}
            </Col>
            <Col xs={12} md={5}>
              <div className="process-point-right-first bg-danger"></div>
              {/* <ProcessBox /> */}
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}
export default WorkingProcess;
