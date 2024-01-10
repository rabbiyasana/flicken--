import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
function ContactUs() {
  const head = {
    color: "#EA4B23",
    marginLeft: "32px",
  };
  const font_20 = {
    fontSize: "20px",
  };
  return (
    <>
      <h1 className="my-5">
        <b style={head}>Flicken</b>
      </h1>

      <Container fluid>
        <Container>
          <Row>
            <Col md={{ span: 6, offset: 3 }}>
              <p style={font_20}>Lets talk!</p>
              <p style={{ color: "#818592", fontSize: "20px" }}>
                Share your ideas & we'll help make them a reality.
              </p>
              <Form>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
                  <Col sm={10}>
                    <Form.Control
                      type="text"
                      placeholder="Full Name"
                      size="lg"
                    />
                  </Col>
                </Form.Group>
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formHorizontalEmail"
                >
                  <Col sm={10}>
                    <Form.Control type="email" placeholder="Email" size="lg" />
                  </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
                  <Col sm={10}>
                    <Form.Control
                      type="text"
                      placeholder="Phone Number"
                      size="lg"
                    />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
                  <Col sm={10}>
                    <Form.Control
                      type="text"
                      placeholder="Your message here"
                      size="lg"
                    />
                  </Col>
                </Form.Group>

                <Form.Group
                  as={Row}
                  className="mb-3"
                  size="lg"
                  controlId="formButton"
                >
                  <Col sm={10}>
                    <Form.Control
                      type="Submit"
                      size="lg"
                      style={{ backgroundColor: "#ea4b23", color: "white" }}
                    />
                  </Col>
                </Form.Group>
              </Form>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}
export default ContactUs;
