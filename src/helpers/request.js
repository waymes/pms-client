import axios from 'axios';

import { getCurrentState } from '../store';

const requestHelper = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL || 'http://localhost:8080',
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

  const token = getCurrentState().auth.token;
  if (token) {
    headers.authorization = token;
  }

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

export function getErrorMessage(err) {
  let error = err.toString();
  const { data } = err.response && (err.response || {});
  if (data && (data.message || data.messages)) {
    error = data.message || data.messages;
  }
  return error;
}
