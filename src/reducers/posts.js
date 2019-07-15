import { GET_BLOG_POSTS } from '../actions';

export default (state = [], action) => {
  switch(action.type) {
    case GET_BLOG_POSTS:
      return action.payload;
    default:
    return state;
  }
}