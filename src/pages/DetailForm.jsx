import { Container, Row, Col, Form } from "react-bootstrap";
import { useState } from "react";
function DetailForm() {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const setField = () => {
    setForm({
      ...form,
      [field]: value,
    });
    if (!!errors[field])
      setErrors({
        ...errors,
        [field]: null,
      });
  };

  const findFormErrors = () => {
    const { firstName, lastName, email, city, address, jobs, bio } = form;
    const newErrors = {};
    if (!firstName || firstName === "") newErrors.firstName = "cannot be blank";
    else if (firstName.length > 15)
      newErrors.firstName = "last name is too long";

    if (!lastName || lastName === "") newErrors.lastName = "cannot be blank";
    else if (lastName.length > 15) newErrors.lastName = "name is too long";

    if (!email || email === "") newErrors.email = "cannot be blank";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Invalid email format!";
    }
    if (!city || city === "") newErrors.city = "cannot be blank";
    else if (city.length > 15) newErrors.city = "name is too long";

    if (!address || address === "") newErrors.address = "cannot be blank";
    else if (address.length > 15) newErrors.address = "name is too long";

    if (!jobs || jobs === "") newErrors.jobs = "select a job!";

    if (!bio || bio === "") newErrors.bio = "Add your bio";

    return newErrors;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = findFormErrors();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      console.log("Thankyou for your feedback");
    }
  };
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
                    <Form.Group>
                      <Form.Label>First name</Form.Label>
                      <Form.Control
                        type="text"
                        onChange={(e) => setField("firstName", e.target.value)}
                        isInvalid={!!errors.firstName}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.firstName}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group>
                      <Form.Label>Last name</Form.Label>
                      <Form.Control
                        type="text"
                        onChange={(e) => setField("lastName", e.target.value)}
                        isInvalid={!!errors.lastName}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.lastName}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>
                <Row className="my-2">
                  <Col>
                    <Form.Group>
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        onChange={(e) => setField("email", e.target.value)}
                        isInvalid={!!errors.email}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.email}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group>
                      <Form.Label>City</Form.Label>
                      <Form.Control
                        type="text"
                        onChange={(e) => setField("city", e.target.value)}
                        isInvalid={!!errors.city}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.city}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>
                <Row className="my-2">
                  <Col>
                    <Form.Group>
                      <Form.Label>Address</Form.Label>
                      <Form.Control
                        type="text"
                        onChange={(e) => setField("address", e.target.value)}
                        isInvalid={!!errors.address}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.address}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>
                <Row className="my-2">
                  <Col>
                    <Form.Group>
                      <Form.Label>Jobs</Form.Label>

                      <Form.Select
                        aria-label="Default select example"
                        as="select"
                        onChange={(e) => setField("Jobs", e.target.value)}
                      >
                        <option>Select...</option>
                        <option value="Australia">Australia</option>
                        <option value="Japan">Japan</option>
                        <option value="United States">United States</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                </Row>
                <Row className="my-2">
                  <Col>
                    <Form.Group>
                      <Form.Label>Short Bio</Form.Label>
                      <Form.Control
                        as="textarea"
                        placeholder="Leave a comment here"
                        style={{ height: "100px" }}
                        onChange={(e) => setField("bio", e.target.value)}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row className="my-2">
                  <Col>
                    <Form.Group controlId="formFile" className="mb-3">
                      <Form.Label>Resume</Form.Label>

                      <Form.Control type="file" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row className="my-2">
                  <Col>
                    <Form.Control
                      type="submit"
                      style={{ backgroundColor: "#EA4B23", color: "white" }}
                      onSubmit={handleSubmit}
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
