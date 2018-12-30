import axios from 'axios';

const requestHelper = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
  timeout: 45000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
});

function parseJSON(response) {
  if (response.status === 204 || response.status === 205) {
    return null;
  }
  return response;
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new Error();
  error.response = response;
  throw error;
}

// eslint-disable-next-line import/prefer-default-export
export function authRequest(meta) {
  const headers = {};

  return requestHelper
    .request({
      method: meta.method || 'GET',
      url: meta.url,
      headers,
      data: JSON.stringify(meta.data)
    })
    .then(checkStatus)
    .then(parseJSON);
}
