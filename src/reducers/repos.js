import { GET_GITHUB_REPOS } from '../actions';

export default (state = [], action) => {
  switch(action.type) {
    case GET_GITHUB_REPOS:
      return action.payload;
    default:
    return state;
  }
}