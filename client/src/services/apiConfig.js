import axios from 'axios';

const baseUrl = process.env.NODE_ENV === 'production' ? 'https://pakyourbags.herokuapp.com/' : 'http://localhost:3000';

// const baseUrl = 'https://pakyourbags.herokuapp.com/';

const api = axios.create({
  baseURL: baseUrl
})

export default api;