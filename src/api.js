import axios from 'axios';

export default axios.create({
  baseURL: `http://derajnet.duckdns.org:5000/`
});