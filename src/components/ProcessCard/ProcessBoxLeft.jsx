import Card from "react-bootstrap/Card";
import { Row, Col } from "react-bootstrap";
import "./ProcessBox.css";
function ProcessBoxLeft() {
  return (
    <>
      <div
        style={{ width: "18rem" }}
        className="bg-white d-flex process-box box_left w-100"
      >
        <Row>
          <Col md={5}>
            <div className="step text-center">
              <p>Step</p>
              <h1>01</h1>
            </div>
          </Col>
          <Col md={7}>
            <div>
              <h5>Project Scoping</h5>
              We engage our clients to fully understand and scope project
              requirements so we can set realistic expectations. At FLICKEN we
              aim to build products that reflect your values and brand identity.
            </div>
          </Col>
        </Row>
        <div className="line"></div>
      </div>
    </>
  );
}

export default ProcessBoxLeft;
