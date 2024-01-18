import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import ProcessBoxLeft from "../ProcessCard/ProcessBoxLeft";
import "./WorkingProcess.css";
import ProcessBoxRight from "../ProcessCard/ProcessBoxRight";
function WorkingProcess() {
  function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }

  function revealRight() {
    var revealright = document.querySelectorAll(".reveal-r");

    for (var i = 0; i < revealright.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = revealright[i].getBoundingClientRect().top;
      var elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        revealright[i].classList.add("active");
      } else {
        revealright[i].classList.remove("active");
      }
    }
  }
  window.addEventListener("scroll", function () {
    reveal();
    revealRight();
  });
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
          <Row className="my-5  m-100">
            <Col xs={12} md={5} className="reveal">
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
          <Row className="my-5  m-100">
            <Col xs={12} md={5} className="position-relative ">
              <div className="process-point-left-second"></div>
            </Col>
            <Col xs={12} md={2}>
              {" "}
            </Col>
            <Col xs={12} md={5} className="reveal-r">
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
          <Row className="my-5  m-100">
            <Col xs={12} md={5} className="reveal">
              <ProcessBoxLeft
                heading="Development"
                content={
                  "With the prototype finalized and approved, we kick start the development process with clear milestones for deliverables. We operate a lean, "
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
          <Row className="my-5  m-100">
            <Col xs={12} md={5} className="position-relative">
              <div className="process-point-left-second"></div>
            </Col>
            <Col xs={12} md={2}>
              {" "}
            </Col>
            <Col xs={12} md={5} className="reveal-r">
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
            <Col xs={12} md={5} className="reveal">
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
