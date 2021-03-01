import { Button } from "react-bootstrap";
import './sample.css';
import logo from '../logo.svg';

const samplePage = () => {

  return (
    // <header className="App-header">
    //   <img src={logo} className="App-logo" alt="logo" />
    //   <p>
    //     Edit <code>src/App.js</code> and save to reload.
    //   </p>
    //   <a
    //     className="App-link"
    //     href="https://reactjs.org"
    //     target="_blank"
    //     rel="noopener noreferrer"
    //   >
    //     Learn React
    //   </a>
    // </header>
    <div>
      <h1>Member Logged in!</h1>
        <a ms-profile="true" href="#">Profile</a>
      <div>
        <Button href="#/ms/logout" variant="danger">Log out</Button>
      </div>
    </div>
  );
}

export default samplePage;