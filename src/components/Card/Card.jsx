import Card from "react-bootstrap/Card";
function ServiceCard(props) {
  return (
    <>
      <Card
        style={{ width: "100%", height: "470px" }}
        className="my-3 text-center"
      >
        <Card.Img
          variant="top"
          src={props.src}
          style={{ width: "150px", margin: "15px auto", height: "150px" }}
        />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.text}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}
export default ServiceCard;
