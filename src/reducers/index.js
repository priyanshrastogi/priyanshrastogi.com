import { combineReducers } from 'redux';
import posts from './posts';
import repos from './repos';

export default combineReducers({
  posts,
  repos
});