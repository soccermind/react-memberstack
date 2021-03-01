import { Button } from "react-bootstrap";
import './sample.css';

const samplePage = () => {

  return (
    <div>
      <h1>Member Logged in!</h1>
      <div>
        <Button ms-profile="true" variant="primary" className="sample-button">
          Profile
        </Button>
        <Button href="#/ms/logout" variant="danger" className="sample-button">
          Log out
        </Button>
      </div>
    </div>
  );
}

export default samplePage;