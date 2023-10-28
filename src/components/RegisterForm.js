import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "../styles/form.css";
const RegisterForm = () => {
  return (
    <>
      <Container>
        <Row>
          <Col xxl={2} xl={2} lg={2} md={12} sm={12} xs={12}></Col>
          <Col xxl={8} xl={8} lg={8} md={12} sm={12} xs={12}>
            <Form>
              <div className="register-form">
                <Row>
                  <Col
                    xxl={12}
                    xl={12}
                    lg={12}
                    md={12}
                    className="text-center mb-4"
                  >
                    <h3>Register Form</h3>
                  </Col>
                  <Col
                    xxl={6}
                    xl={6}
                    lg={6}
                    md={12}
                    sm={12}
                    xs={12}
                    className="mb-4"
                  >
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name="name"></Form.Control>
                  </Col>
                  <Col
                    xxl={6}
                    xl={6}
                    lg={6}
                    md={12}
                    sm={12}
                    xs={12}
                    className="mb-4"
                  >
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name="email"></Form.Control>
                  </Col>
                  <Col
                    xxl={6}
                    xl={6}
                    lg={6}
                    md={12}
                    sm={12}
                    xs={12}
                    className="mb-4"
                  >
                    <Form.Label>Mobile Number</Form.Label>
                    <Form.Control
                      type="tel"
                      name="mobile-number"
                    ></Form.Control>
                  </Col>
                  <Col
                    xxl={6}
                    xl={6}
                    lg={6}
                    md={12}
                    sm={12}
                    xs={12}
                    className="mb-4"
                  >
                    <Form.Label>Date of Birth</Form.Label>
                    <Form.Control type="date" name="dob"></Form.Control>
                  </Col>
                  <Col
                    xxl={6}
                    xl={6}
                    lg={6}
                    md={12}
                    sm={12}
                    xs={12}
                    className="mb-4"
                  >
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      name="password"
                    ></Form.Control>
                  </Col>
                  <Col
                    xxl={6}
                    xl={6}
                    lg={6}
                    md={12}
                    sm={12}
                    xs={12}
                    className="mb-4"
                  >
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                      type="password"
                      name="reset-password"
                    ></Form.Control>
                  </Col>
                  <Col xxl={12} xl={12} md={12} className="text-center">
                    <Button type="submit" className="btn-register">
                      Submit
                    </Button>
                  </Col>
                </Row>
              </div>
            </Form>
          </Col>
          <Col xxl={2} xl={2} lg={2} md={12} sm={12} xs={12}></Col>
        </Row>
      </Container>
    </>
  );
};

export default RegisterForm;
