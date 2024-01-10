import { Link } from "react-router-dom";
import { Container, Row, Col, Image } from "react-bootstrap";
// import careerImg from "src/assets/images/career.png";
import careerImg from "../assets/images/career.png";
function Career() {
  const head = {
    color: "#EA4B23",
    marginLeft: "32px",
  };
  const btn = {
    color: "white",
    backgroundColor: "#EA4B23",
    padding: "10px",
    borderRadius: "5px",
    textDecoration: "none",
  };
  return (
    <>
      <h1 className="my-5">
        <b style={head}>Flicken</b>
      </h1>
      <Container fluid>
        <Container>
          <Row>
            <Col sm={12} lg={6}>
              <Image src={careerImg} width="100%" alt="" />
            </Col>
            <Col sm={12} lg={6}>
              <h1 style={{ fontSize: "3.75rem", fontWeight: "800" }}>
                BE A PART OF CHANGE. JOIN THE
                <span style={{ color: "#EA4B23" }}> FLICKEN</span>
              </h1>
              <p>Drive your career and growth by joining our disruptive team</p>
              {/* <ContactButton text="Apply Now"> */}
              <Link style={btn} to="/detailform">
                Apply Now
              </Link>
              {/* </ContactButton> */}
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}
export default Career;
