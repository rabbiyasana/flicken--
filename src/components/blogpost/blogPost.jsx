import { Container, Row, Col } from "react-bootstrap";
import { Helmet } from "react-helmet";
function BlogPost({ title, description }) {
  return (
    <>
      <Container className="mt-5">
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={description} />
        </Helmet>
        <Row>
          <Col>
            <h1>{title}</h1>
            <p>{description} </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default BlogPost;
