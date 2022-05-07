/*
 * Import this file to connect in exampleApi
 */
import axios from 'axios';

const exampleApi = axios.create({
  baseURL: 'http://localhost:6001',
});

export default exampleApi;
