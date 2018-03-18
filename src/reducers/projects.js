import { FETCH_PROJECTS } from '../actions';
import _ from 'lodash';

export default function(state = {}, action) {
    switch(action.type) {
        case FETCH_PROJECTS:
            return _.mapKeys(action.payload, 'id');

        default:
            return state;
    }
}