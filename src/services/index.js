import axios from 'axios';

let API_ROOT_URL;
if(process.env.REACT_APP_RUN_ON_LOCAL === '1') {
  API_ROOT_URL = 'http://localhost:9000/.netlify/functions/api';
}
else {
  API_ROOT_URL = '/.netlify/functions/api';
}

export const subscribeUser = (email) => new Promise(async (resolve, reject) => {
  try {
    const { data } = await axios.post(`${API_ROOT_URL}/subscribe`, {email});
    resolve(data);
  }
  catch(err) {
    reject(err);
  }
});