import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignUpForm from './components/signup';
import LoginForm from './components/login';
import SamplePage from './components/sample';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={LoginForm} />
          <Route path="/login" component={LoginForm} />
          <Route path="/signup" component={SignUpForm} />
          <Route path="/sample" component={SamplePage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
