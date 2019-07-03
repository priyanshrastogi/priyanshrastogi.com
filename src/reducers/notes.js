import _ from 'lodash';
import { GET_CODE_NOTES, GET_CODE_NOTE } from '../actions';

export default (state = {}, action) => {
  switch(action.type) {
    case GET_CODE_NOTES:
      return _.mapKeys(action.payload, 'link');
    case GET_CODE_NOTE:
    return { ...state, [action.payload.link]: action.payload};
    default:
    return state;
  }
}