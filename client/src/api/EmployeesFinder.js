import axios from 'axios'

export default axios.create ({
  baseUrl:'http://localhost:3005/api/v1/employees/'
});