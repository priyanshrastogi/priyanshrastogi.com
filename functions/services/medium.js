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
})