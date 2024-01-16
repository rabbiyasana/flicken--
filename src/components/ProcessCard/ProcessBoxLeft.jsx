import Card from "react-bootstrap/Card";
import { Row, Col } from "react-bootstrap";
import "./ProcessBox.css";
function ProcessBoxLeft(props) {
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
              <h5>{props.heading}</h5>
              {props.content}
            </div>
          </Col>
        </Row>
        <div className="process-line-l"></div>
      </div>
    </>
  );
}

export default ProcessBoxLeft;
