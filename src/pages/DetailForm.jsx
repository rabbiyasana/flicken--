import { Container, Row, Col, Form } from "react-bootstrap";

function DetailForm() {
  return (
    <>
      <Container>
        <Container>
          <Row className="my-5">
            <Col md={{ span: 6, offset: 3 }}>
              <h1 className="text-center">Personal Details</h1>
              <Form className="my-5">
                <Row>
                  <Col>
                    <Form.Label>First name</Form.Label>
                    <Form.Control />
                  </Col>
                  <Col>
                    <Form.Label>Last name</Form.Label>
                    <Form.Control />
                  </Col>
                </Row>
                <Row className="my-2">
                  <Col>
                    <Form.Label>Email</Form.Label>
                    <Form.Control />
                  </Col>
                  <Col>
                    <Form.Label>City</Form.Label>
                    <Form.Control />
                  </Col>
                </Row>
                <Row className="my-2">
                  <Col>
                    <Form.Label>Address</Form.Label>

                    <Form.Control />
                  </Col>
                </Row>
                <Row className="my-2">
                  <Col>
                    <Form.Label>Jobs</Form.Label>

                    <Form.Select aria-label="Default select example">
                      <option>Select...</option>
                      <option value="1">Australia</option>
                      <option value="2">Japan</option>
                      <option value="3">United States</option>
                    </Form.Select>
                  </Col>
                </Row>
                <Row className="my-2">
                  <Col>
                    <Form.Label>Short Bio</Form.Label>
                    <Form.Control
                      as="textarea"
                      placeholder="Leave a comment here"
                      style={{ height: "100px" }}
                    />
                  </Col>
                </Row>
                <Row className="my-2">
                  <Col>
                    <Form.Label>Resume</Form.Label>

                    <Form.Group controlId="formFile" className="mb-3">
                      <Form.Control type="file" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row className="my-2">
                  <Col>
                    <Form.Control
                      type="submit"
                      style={{ backgroundColor: "#EA4B23", color: "white" }}
                    />
                  </Col>
                </Row>
              </Form>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default DetailForm;
