import { Form, Button } from "react-bootstrap";
import './login.css';

const LoginForm = () => {

  return (
    <div class="login">
       <h1>Log in</h1>
      
      <Form data-ms-form="login" className="form-login">
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control data-ms-member="email" type="email" placeholder="Enter email" />
        </Form.Group>
      
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control data-ms-member="password" type="password" placeholder="Password" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default LoginForm;