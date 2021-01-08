import axios from 'axios'

//const baseURL = 'http://localhost:3006/api/v1/employees/';

// NODE_ENV = development environment
// NODE_ENV = production environment

// if we are production we on /api/v1/employees

const baseURL = process.env.NODE_ENV === 'production' 
? '/api/v1/employees'
: 'http://localhost/api/v1/employees';

export default axios.create ({
  baseURL.
});