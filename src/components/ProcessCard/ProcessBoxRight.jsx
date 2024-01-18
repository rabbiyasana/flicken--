import Card from "react-bootstrap/Card";
import { Row, Col } from "react-bootstrap";
import "./ProcessBox.css";
function ProcessBoxRight() {
  return (
    <>
      <div
        style={{ width: "18rem", height: "310px" }}
        className="bg-white d-flex process-box-right box-right w-100"
      >
        <Row>
          <Col md={5}>
            <div className="step-r text-center">
              <p>Step</p>
              <h1>02</h1>
            </div>
          </Col>
          <Col md={7}>
            <div>
              <h5>UI/UX Design</h5>
              We engage our clients to fully understand and scope project
              requirements so we can set realistic expectations. At FLICKEN we
              aim to build products that reflect your values and brand identity.
            </div>
          </Col>
        </Row>
        <div className="process-line-r"></div>
      </div>
    </>
  );
}

export default ProcessBoxRight;
