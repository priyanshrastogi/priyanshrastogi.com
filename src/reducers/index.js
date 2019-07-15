import { combineReducers } from 'redux';
import posts from './posts';
import repos from './repos';
import notes from './notes';
import drafts from './drafts';

export default combineReducers({
  posts,
  repos,
  notes,
  drafts
});