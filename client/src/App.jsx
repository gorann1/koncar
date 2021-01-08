import './tailwind.output.css';
//import Navbar from './components/Navbar.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './routes/Home';
import UpdateEmployeesPage from './routes/UpdateEmployees';
import PositionDetails from './routes/PositionDetails';
import ManageCompetency from './routes/ManageCompetency';
function App() {
  return (
  <Router>
    <Switch>
    <Route exact path="/" component={Home} />  
    <Route exact path="/employees/:id/update" component={UpdateEmployeesPage} />    
    <Route exact path="/positions/:id" component={PositionDetails} />  
    <Route exact path="/competency/:id" component={ManageCompetency} />  
    <Route 
    exact path="/" 
    component={Home} 
    />
    </Switch>  
  </Router>
  )
};

export default App;
