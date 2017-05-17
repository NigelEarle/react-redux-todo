import axios from 'axios';

export default ({
  endpoint = '/api',
  path = '/',
  method = 'GET',
  body,
}) => {
  const url = `${endpoint}${path}`;
  const requestObject = {
    method,
    url,
    headers: { 'Accept': 'application/json' },
  };

  if (body) {
    requestObject.headers['Content-Type'] = 'application/json;charset=UTF-8';
    requestObject.data = JSON.stringify(body);
  }

  return axios(requestObject);
};
