import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
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
