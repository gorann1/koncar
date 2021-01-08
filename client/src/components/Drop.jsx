import React from 'react';
import {Route, Router, Switch } from 'react-router-dom';
import FetchCenters from '../components/FetchCenters';

class Drop extends React.Component {
  render() {
    return(
  <div class="dropdown inline-block relative">
    <button class="text-gray-700 py-2 px-4  hover:bg-indigo-600 hover:text-white rounded inline-flex items-center">
      <span class="mr-1">Modeliranje</span>
      <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/> </svg>
    </button>
    <ul class="dropdown-menu absolute hidden text-gray-700 pt-1">
      <li class=""><a class="text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300 py-2 px-4 block whitespace-no-wrap" href="{'/index}">Zaposlenih</a></li>
      <li class=""><a class="text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300 py-2 px-4 block whitespace-no-wrap" href="{'/index}">Radnih mjesta</a></li>
      <li class=""><a class="text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300 py-2 px-4 block whitespace-no-wrap" href="{'/index}">Kompetencija</a></li>
    </ul>
  </div>
    )
  }
}

export default Drop