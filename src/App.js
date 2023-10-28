import "../node_modules/react-bootstrap/dist/react-bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./App.css";
import RegisterForm from "./components/RegisterForm";
const App = () => {
  return (
    <>
      <div className="section-padding register-form-area">
        <RegisterForm />
      </div>
    </>
  );
};

export default App;
