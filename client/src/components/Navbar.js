import React from 'react'
import { AiOutlineBars } from 'react-icons/ai';
import Drop from './Drop';

class Navbar extends React.Component {

   render() {
    return (
      <nav className="bg-white py-2 md:py-4">
        <div className="container px-4 mx-auto md:flex md:items-center">
          <div className="flex justify-between items-center">
            <a href="{'/home'}" className="font-bold text-xl text-indigo-600">KONČAR HR</a>
            <button className="border border-solid border-gray-600 px-3 py-1 rounded text-gray-600 opacity-50 hover:opacity-75 md:hidden" id="navbar-toggle">
              <AiOutlineBars />
            </button>
          </div>
          <div className="hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0" id="navbar-collapse">
            <a href="{'/info}" className="p-2 lg:px-4 md:mx-2 text-white rounded bg-indigo-600">Doma</a>
            <a href="{'/info}" className="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300">Struktura</a>
            <Drop />
            <a href="{'/info}" className="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300">Korisnici</a>
            <a href="{'/info}" className="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300">Dokumentacija</a>
            <a href="{'/info}" className="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300">Kontakt</a>
            <a href="{'/info}" class="p-2 lg:px-4 md:mx-2 text-indigo-600 text-center border border-transparent rounded hover:bg-indigo-100 hover:text-indigo-700 transition-colors duration-300">Login</a>
            <a href="{'info}" class="p-2 lg:px-4 md:mx-2 text-indigo-600 text-center border border-solid border-indigo-600 rounded hover:bg-indigo-600 hover:text-white transition-colors duration-300 mt-1 md:mt-0 md:ml-1">Register</a>
             <a href="{'info}" class="p-2 lg:px-4 md:mx-2 text-red-600 text-center border border-transparent rounded hover:bg-red-100 hover:text-red-600 transition-colors duration-300">Admin</a>
          </div>
        </div>
      </nav>      

    )
  }
}

export default Navbar

/* let toggleBtn = document.querySelector("#navbar-toggle");
let collapse = document.querySelector("#navbar-collapse");

toggleBtn.onclick = () => {
  collapse.classList.toggle("hidden");
  collapse.classList.toggle("flex");
};
 */