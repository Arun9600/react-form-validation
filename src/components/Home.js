import { Container, Row, Col } from "react-bootstrap";
const Home = () => {
  return (
    <>
      <Container>
        <Row>
          <Col xxl={12} md={12} className="text-center">
            <h1>React Demo</h1>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
