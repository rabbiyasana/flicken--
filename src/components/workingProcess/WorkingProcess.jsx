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
              <ProcessBoxLeft />
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
              <ProcessBoxRight />
            </Col>
          </Row>
          {/* third row */}
          <Row className="my-5">
            <Col xs={12} md={5}>
              <ProcessBoxLeft />
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
              <ProcessBoxRight />
            </Col>
          </Row>

          {/* support row */}
          <Row className="my-5">
            <Col xs={12} md={5}>
              <ProcessBoxLeft />
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
