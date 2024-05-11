import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import img from "../../Assets/contactimg.jpg";
function ContactImg() {
  return (
    <Container>
      <Col>
        <Col xs={6} md={4}>
          <img src={img} alt="Personal Photo" />
        </Col>
      </Col>
    </Container>
  );
}

export default ContactImg;
