import axios from 'axios';

export const GET_BLOG_POSTS = 'get_blog_posts';
export const GET_GITHUB_REPOS = 'get_github_repos';

let API_ROOT_URL;
if(process.env.REACT_APP_RUN_ON_LOCAL === '1') {
  API_ROOT_URL = 'http://localhost:9000/.netlify/functions/api';
}
else {
  API_ROOT_URL = '/.netlify/functions/api';
}

export const getBlogPosts = () => async dispatch => {
  try {
    const res = await axios.get(`${API_ROOT_URL}/blog/posts`);
    dispatch({type: GET_BLOG_POSTS, payload: res.data.items}); 
  }
  catch(err) {
    console.log(err);
  }
}

export const getGithubRepos = () => async dispatch => {
  try {
    const res = await axios.get(`${API_ROOT_URL}/github/repos`);
    dispatch({type: GET_GITHUB_REPOS, payload: res.data});
  }
  catch(err) {
    console.log(err);
  }
}