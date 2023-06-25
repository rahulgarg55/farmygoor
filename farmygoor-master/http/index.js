import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000/backend';

/** Handle all api errors from here **/
const client = axios.create()
client.interceptors.response.use(
  res => res,
  err => {
    alert(err.response.data)
    throw err.response.data
  })

export default client
