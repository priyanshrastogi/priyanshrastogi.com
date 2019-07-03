import { combineReducers } from 'redux';
import posts from './posts';
import repos from './repos';
import notes from './notes';

export default combineReducers({
  posts,
  repos,
  notes
});