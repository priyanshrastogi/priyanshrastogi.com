const axios = require('axios').default;

exports.getBlogPosts = () => new Promise(async (resolve, reject) => {
  try {
    const { data } = await axios.get('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fblog.priyanshrastogi.com%2Ffeed');
    for(let i=0; i<data.items.length; i++) {
      delete data.items[i]['description'];
      delete data.items[i]['content'];
    }
    resolve(data);
  }
  catch(err) {
    reject(err);
  }
});

exports.getGithubRepos = () => new Promise(async (resolve, reject) => {
  try {
    const { data } = await axios.get('https://api.github.com/users/priyanshrastogi/repos?sort=pushed');
    const res = [];
    for(let i=0; i<Math.min(data.length, 10); i++) {
      res.push({fullName: data[i].full_name, url: data[i].html_url, id: data[i].id});
    }
    resolve(res);
  }
  catch(err) {
    reject(err);
  }
});