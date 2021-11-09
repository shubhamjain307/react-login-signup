import axios from 'axios';

let baseUrl = '';
baseUrl = 'http://172.17.0.1:4000/api/';
// baseUrl = 'http://localhost:4000/api/';

let config = {
    headers: {
      'x-api-key': localStorage.getItem('token'),
    }
  }
// baseUrl = 'http://modern-estate.html-5.me/interior-design/public/api/react-house';

export function get(url) {
    url += '?token=' + localStorage.getItem('token');
    return axios.get(baseUrl + url);
}

export function post(url, data) {
    url += '?token=' + localStorage.getItem('token');
    return axios.post(baseUrl + url, data);
}

