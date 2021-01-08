import './tailwind.output.css'
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Documentation from './pages/Documentation';
import Structure from './pages/Structure';
import Users from './pages/Users';
import Contact from './pages/Contact';
import Register from './pages/Register';
import Admin from './pages/Admin';

const classes = {
  wrapper: 'border-2 m-16 p-16',
  title: 'text-gray-800 text-xl text-center font-bold',
}

function App() {
  return (
  <Router>
    <Navbar />
      <Switch>
      <Route path="/structure">
          <Structure />
        </Route>
        <Route path="/documentation">
          <Documentation />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/admin">
          <Admin />
        </Route>
      </Switch>
  </Router>
  );
};

export default App;
