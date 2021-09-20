import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';

function App() {
  return (
    <Router>
      <Route path={['/home', '/']} exact component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={SignUp} />
    </Router>
  );
}

export default App;
