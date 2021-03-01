import { Form, Button } from "react-bootstrap";
import './signup.css';

const SignUpForm = () => {

  return (
    <div class="sign-up">
       <h1>Sign up</h1>
      
      <Form data-ms-form="signup" className="form-signup">
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control data-ms-member="email" type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
      
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control data-ms-member="password" type="password" placeholder="Password" />
        </Form.Group>

        <Button 
        variant="primary" type="submit" >
          Submit
        </Button>
      </Form>
      <a class="to-login" href="/login">Already a member? (log in)</a>
    </div>
  );
}

export default SignUpForm;