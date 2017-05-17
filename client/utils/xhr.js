export default ({
  endpoint = '/api',
  path = '/',
  method = 'GET',
  body,
}) => {
  return new Promise((resolve, reject) => {
    const url = `${endpoint}${path}`;

    const oReq = new XMLHttpRequest();
    oReq.open(method, url, true);
    oReq.setRequestHeader('Accept', 'application/json');
    oReq.onload = function() {
      if (oReq.status > 200 && oReq.status < 300) {
        resolve(JSON.parse(this.responseText));
      } else {
        reject(JSON.parse(this.responseText));
      }
    };
    if (body) {
      oReq.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
      oReq.send(JSON.stringify(body));
    } else {
      oReq.send();
    }
  });
};
