// Blogs.jsx

import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import BlogPost from "../components/blogpost/blogPost";
import NavBar from "../components/NavBar/navbar";

function Blogs({ blogsData }) {
  return (
    <>
      {/* <NavBar /> */}
      <Container>
        <Row className="mt-5">
          {blogsData.map((blog) => (
            <Col key={blog.id} sm={12} md={6} lg={4}>
              <Link to={`/blogs/${blog.id}`}>
                <Card className="mb-4">
                  <Card.Body>
                    <Card.Title>{blog.title}</Card.Title>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
        <Row>
          <Col sm={12} md={6} lg={4}>
            <Routes>
              {blogsData.map((blog) => (
                <Route
                  key={blog.id}
                  path={`/blogs/${blog.id}`}
                  element={
                    <BlogPost
                      title={blog.title}
                      description={blog.description}
                    />
                  }
                />
              ))}
            </Routes>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Blogs;
