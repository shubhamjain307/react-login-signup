import axios from 'axios';

let baseUrl = '';
baseUrl = 'http://172.17.0.1:4000/api/';

let config = {
    headers: {
      'x-api-key': localStorage.getItem('token'),
    }
  }

export function get(url) {
    url += '?token=' + localStorage.getItem('token');
    return axios.get(baseUrl + url);
}

export function post(url, data) {
    data.token = localStorage.getItem('token');
    return axios.post(baseUrl + url, data);
}

export function put(url, data) {
    data.token = localStorage.getItem('token');
    return axios.put(baseUrl + url, data);
}
