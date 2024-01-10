import { Button } from "react-bootstrap";

function ContactButton(props) {
  const bg_color = {
    backgroundColor: "#EC5934",
    border: "none",
  };
  return (
    <>
      <Button size="lg" style={bg_color}>
        {props.text}
      </Button>{" "}
    </>
  );
}
export default ContactButton;
