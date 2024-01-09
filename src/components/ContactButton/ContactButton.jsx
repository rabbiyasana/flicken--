import { Button } from "react-bootstrap";

function ContactButton() {
  const bg_color = {
    backgroundColor: "#EC5934",
    border: "none",
  };
  return (
    <>
      <Button size="lg" style={bg_color}>
        Contact Us
      </Button>{" "}
    </>
  );
}
export default ContactButton;
