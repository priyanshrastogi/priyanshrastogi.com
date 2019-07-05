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

export const saveDraft = (id, note, key) => new Promise(async (resolve, reject) => {
  try {
    if(id === '') {
      const { data } = await axios.post(`${API_ROOT_URL}/codenotes/drafts`, note, {
        headers: {'Authorization': key}
      });
      resolve(data);
    }
    else {
      const { data } = await axios.put(`${API_ROOT_URL}/codenotes/drafts/${id}`, note, {
        headers: {'Authorization': key}
      });
      resolve(data);
    }
  }
  catch(err) {
    reject(err);
  }
});