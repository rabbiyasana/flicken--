import React from "react";
import { Container, Row, Col, Image, Card } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import reviewOne from "../../assets/images/rev.jpg";
function TestimonialCarousel() {
  const reviews = [
    {
      src: reviewOne,
      username: "Nauman Sharif, CEO",
      review:
        "Flicken did excellent work. Was diligent in understanding what was needed and provided exactly as requested. They were easy to work with and delivered a great product.",
    },
    {
      src: reviewOne,
      username: "Nauman Sharif, CEO",
      review:
        "Flicken did excellent work. Was diligent in understanding what was needed and provided exactly as requested. They were easy to work with and delivered a great product.",
    },
    {
      src: reviewOne,
      username: "Nauman Sharif, CEO",
      review:
        "Flicken did excellent work. Was diligent in understanding what was needed and provided exactly as requested. They were easy to work with and delivered a great product.",
    },
  ];
  const height = {
    height: "100%",
  };
  return (
    <>
      <Carousel data-bs-theme="dark bg-primary" style={height}>
        {reviews.map((review, index) => (
          <Carousel.Item key={index}>
            <Card className="border-0">
              <div className="text-center">
                <img
                  className="rounded-circle mt-3"
                  src={review.src}
                  alt={`Review ${index + 1}`}
                  width="100"
                  height="100"
                  border="2px solid #EA4B23 !important"
                />
              </div>
              <Card.Body className="text-center">
                <Card.Title>{review.username}</Card.Title>
                <Card.Text>{review.review}</Card.Text>
              </Card.Body>
            </Card>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
}
export default TestimonialCarousel;
