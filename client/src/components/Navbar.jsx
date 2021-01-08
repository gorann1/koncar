import React from 'react'
import { AiOutlineBars } from 'react-icons/ai';
import Drop from './Drop';
import {Link , Route, Switch} from 'react-router-dom';
import Login from '../pages/Login';
import Home from '../pages/Home';
import Structure from '../pages/Structure';
import Admin from '../pages/Admin';
import Users from '../pages/Users';
import Documentation from '../pages/Documentation';
import Contact from '../pages/Contact';
import Register from '../pages/Register';
import Employees from '../pages/Employees';


const classes = {
  wrapper: 'w-5/6 m-auto 16 p-2',
}
class Navbar extends React.Component {

   render() {
    return (
      <>
    <div className={classes.wrapper}>
      <nav className="bg-white py-2 md:py-4">
        <div className="container px-4 mx-auto md:flex md:items-center">
          <div className="flex justify-between items-center">
            <Link 
            to="/" 
            className="font-bold text-xl text-indigo-600">
              COMPETO
            </Link>
            <button className="border border-solid border-gray-600 px-3 py-1 rounded text-gray-600 opacity-50 hover:opacity-75 md:hidden" id="navbar-toggle">
              <AiOutlineBars />
            </button>
          </div>
          <div className="hidden md:flex flex-col md:flex-row md:ml-auto mt-3  md:mt-0" id="navbar-collapse">
            <Link to="/"
            className="
            p-2 
            lg:px-4 
            md:mx-2 
            text-white 
            rounded 
            bg-indigo-600"
            >
              Doma
            </Link>
            <Link to="/structure" 
            className="
            p-2 
            lg:px-4 
            md:mx-2 
            text-gray-600 
            rounded
            hover:bg-gray-200 
            hover:text-gray-700 
            transition-colors 
            duration-300"
            >
              Struktura
              </Link>
            <Drop />
            <Link 
            to="/users" 
            className="
            p-2 
            lg:px-4 
            md:mx-2 
            text-gray-600 
            rounded 
            hover:bg-gray-200 
            hover:text-gray-700 
            transition-colors 
            duration-300"
            >
              Korisnici
            </Link>
            <Link 
            to="/documentation" 
            className="
            p-2 
            lg:px-4 
            md:mx-2 
            text-gray-600 
            rounded 
            hover:bg-gray-200 
            hover:text-gray-700 
            transition-colors 
            duration-300"
            >
              Dokumentacija
              </Link>
            <Link 
            to="/contact" 
            className="
            p-2 
            lg:px-4 
            md:mx-2 
            text-gray-600 
            rounded 
            hover:bg-gray-200 
            hover:text-gray-700 
            transition-colors 
            duration-300"
            >
              Kontakt
              </Link>
            <Link to="/login" 
            className="
            p-2 
            lg:px-4 
            md:mx-2 
            text-indigo-600 
            text-center 
            border 
            border-transparent 
            rounded 
            hover:bg-indigo-100 
            hover:text-indigo-700 
            transition-colors 
            duration-300"
            >
              Login
              </Link>
            <Link 
            to="/register" 
            className="
            p-2 lg:px-4 
            md:mx-2 
            text-indigo-600 
            text-center 
            border 
            border-solid 
            border-indigo-600 
            rounded 
            hover:bg-indigo-600 
            hover:text-white 
            transition-colors 
            duration-300 
            mt-1 
            md:mt-0 
            md:ml-1"
            >
              Register
              </Link>
             <Link 
             to="/admin"
             exact 
             className="p-2 
             lg:px-4 
             md:mx-2 
             text-red-600 
             text-center 
             border 
             border-transparent 
             rounded 
             hover:bg-red-100 
             hover:text-red-600 
             transition-colors 
             duration-300"
             >
               Admin
               </Link>
          </div>
        </div>
      </nav>
        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route path="/structure"><Structure /></Route>
          <Route path="/documentation"><Documentation /></Route>
          <Route path="/login"><Login /></Route>
          <Route path="/admin"><Admin /></Route>
          <Route path="/users"><Users /></Route>
          <Route path="/contact"><Contact /></Route>
          <Route path="/register"><Register /></Route>
          <Route path="/employees"><Employees /></Route>
        </Switch>
    </div>
</>
    );
  }
}

export default Navbar

//TODO:ovo dolje u propse handle
/* let toggleBtn = document.querySelector("#navbar-toggle");
let collapse = document.querySelector("#navbar-collapse");

toggleBtn.onclick = () => {
  collapse.classList.toggle("hidden");
  collapse.classList.toggle("flex");
};
 */