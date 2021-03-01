import { Button } from "react-bootstrap";
import './sample.css';
import logo from '../logo.svg';

const samplePage = () => {

  return (
    <div>
      <h1>Member Logged in!</h1>
      <div>
        <Button ms-profile="true" variant="primary">Profile</Button>
        <Button href="#/ms/logout" variant="danger">Log out</Button>
      </div>
    </div>
  );
}

export default samplePage;