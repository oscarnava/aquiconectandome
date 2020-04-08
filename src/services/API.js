const SERVER_URL = 'https://oscarnava.me/aquiconectandome/';

const request = (cmd) => {
  const opts = {
    method: 'POST',
    body: cmd && JSON.stringify(cmd),
  };
  return fetch(SERVER_URL, opts).then((response) => response.json());
};

export default request;
