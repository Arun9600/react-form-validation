import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "../styles/form.css";
import { useForm } from "react-hook-form";
const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
    setError,
    watch,
  } = useForm();
  const password = watch("password");
  const confirm_password = watch("confirm_password");
  const onSubmit = (data) => {
    console.log(data);
  };
  const handleLettersOnly = (e) => {
    e.target.value = e.target.value.replace(/[^A-Za-z\s]/g, "");
    clearErrors("name");
    if (e.target.value == "") {
      setError("name");
    }
  };
  const handleKeyDownNumber = (e) => {
    e.target.value = e.target.value.replace(/[^0-9+]/g, "");
    clearErrors("mobile_number");
    if (e.target.value === "") {
      setError("mobile_number");
    }
  };

  const maxDate = () => {
    let max = new Date().toISOString().split("T")[0];
    return max;
  };
  return (
    <>
      <Container>
        <Row>
          <Col xxl={2} xl={2} lg={2} md={12} sm={12} xs={12}></Col>
          <Col xxl={8} xl={8} lg={8} md={12} sm={12} xs={12}>
            <Form onSubmit={handleSubmit(onSubmit)}>
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
                    <Form.Control
                      type="text"
                      name="name"
                      {...register("name", {
                        required: true,
                      })}
                      className={`${errors.name ? "error-field" : " "}`}
                      onChange={handleLettersOnly}
                    ></Form.Control>
                    <span className="error-message">
                      {errors.name && <p>Name is Required</p>}
                    </span>
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
                    <Form.Control
                      type="email"
                      name="email"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value:
                            /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/,
                          message: "Enter the valid email address",
                        },
                      })}
                      className={`${errors.email ? "error-field" : ""}`}
                    ></Form.Control>
                    <span className="error-message">
                      {errors.email && <p>{errors.email.message}</p>}
                    </span>
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
                      {...register("mobile_number", {
                        required: true,
                      })}
                      className={`${errors.mobile_number ? "error-field" : ""}`}
                      onChange={handleKeyDownNumber}
                    ></Form.Control>
                    <span className="error-message">
                      {errors.mobile_number && <p>Mobile Number is Required</p>}
                    </span>
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
                    <Form.Control
                      type="date"
                      name="dob"
                      {...register("dob", {
                        required: true,
                      })}
                      className={`${errors.dob ? "error-field" : ""}`}
                      max={maxDate()}
                    ></Form.Control>
                    <span className="error-message">
                      {errors.dob && <p>Date is Required</p>}
                    </span>
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
                      {...register("password", {
                        required: "Password is required",
                        minLength: {
                          value: 8,
                          message:
                            "Password must be at least 8 characters long",
                        },
                      })}
                      className={`${errors.password ? "error-field" : ""}`}
                    ></Form.Control>
                    <span className="error-message">
                      {errors.password && <p>{errors.password.message}</p>}
                    </span>
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
                      name="confirm_password"
                      {...register("confirm_password", {
                        required: "Confirm Password is required",
                        validate: (value) =>
                          value === password || "Passwords do not match",
                      })}
                      className={`${
                        errors.confirm_password ? "error-field" : ""
                      }`}
                    ></Form.Control>
                    <span className="error-message">
                      {errors.confirm_password && (
                        <p>{errors.confirm_password.message}</p>
                      )}
                    </span>
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
