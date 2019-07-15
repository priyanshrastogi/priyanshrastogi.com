import _ from 'lodash';
import { GET_CODE_NOTES_DRAFTS } from '../actions';

export default (state = {}, action) => {
  switch(action.type) {
    case GET_CODE_NOTES_DRAFTS:
      return _.mapKeys(action.payload, '_id');
    default:
    return state;
  }
}