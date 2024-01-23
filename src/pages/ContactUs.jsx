import React, { useState, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import emailjs from "emailjs-com";
function ContactUs() {
  const head = {
    color: "#EA4B23",
    marginLeft: "32px",
  };
  const font_20 = {
    fontSize: "20px",
  };

  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const formRef = useRef();

  const setField = (field, value) => {
    setForm({
      ...form,
      [field]: value === null ? "" : value,
    });
  };

  const findErrors = () => {
    const { FullName, email, PhoneNumber } = form;
    const newErrors = {};
    if (!FullName || FullName === "") newErrors.FullName = "cannot be blank";
    else if (FullName.length > 15) newErrors.FullName = "name is too long";
    if (!email || email === "") newErrors.email = "cannot be blank";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      newErrors.email = "Invalid email format!";
    if (!PhoneNumber || PhoneNumber === "")
      newErrors.PhoneNumber = "cannot be blank";
    else if (PhoneNumber.length > 11)
      newErrors.PhoneNumber = "PhoneNumber is too long";

    return newErrors;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = findErrors();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      try {
        await emailjs.send(
          "service_1qh2vyj",
          "template_8qf51pw",
          {
            to_name: "Flicken",
            from_name: form.FullName,
            message: form.Message,
          },
          "ZhkCyg2acag_zgMHz"
        );

        console.log("Email sent successfully!");
        localStorage.setItem("formData", JSON.stringify(form));
        formRef.current.reset();
        setForm({});
      } catch (error) {
        console.error("Error sending email:", error);
      }
    }
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
              <Form ref={formRef}>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
                  <Col sm={10}>
                    <Form.Control
                      type="text"
                      placeholder="Full Name"
                      size="lg"
                      onChange={(e) => setField("FullName", e.target.value)}
                      isInvalid={!!errors.FullName}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.FullName}
                    </Form.Control.Feedback>
                  </Col>
                </Form.Group>
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formHorizontalEmail"
                >
                  <Col sm={10}>
                    <Form.Control
                      type="email"
                      placeholder="Email"
                      size="lg"
                      onChange={(e) => setField("email", e.target.value)}
                      isInvalid={!!errors.email}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.email}
                    </Form.Control.Feedback>
                  </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
                  <Col sm={10}>
                    <Form.Control
                      type="number"
                      placeholder="Phone Number"
                      size="lg"
                      onChange={(e) => setField("PhoneNumber", e.target.value)}
                      isInvalid={!!errors.PhoneNumber}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.PhoneNumber}
                    </Form.Control.Feedback>
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
                  <Col sm={10}>
                    <Form.Control
                      type="text"
                      placeholder="Your message here"
                      size="lg"
                      onChange={(e) => setField("Message", e.target.value)}
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
                      onClick={handleSubmit}
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
