import axios from 'axios';

export const GET_BLOG_POSTS = 'get_blog_posts';

const API_ROOT_URL = '/.netlify/functions/api';

export const getBlogPosts = () => async dispatch => {
  try {
    const res = await axios.get(`${API_ROOT_URL}/blog/posts`);
    dispatch({type: GET_BLOG_POSTS, payload: res.data.items});
    
  }
  catch(err) {
    console.log(err);
  }
  
}