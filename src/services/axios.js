/*
 * Import this file to connect in exampleApi
 */
import axios from 'axios';

const exampleApi = axios.create({
  baseURL: 'http://localhost:6000',
});

export default exampleApi;
