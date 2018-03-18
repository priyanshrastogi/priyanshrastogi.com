import { combineReducers } from 'redux';
import projectReducer from './projects';

const rootReducer = combineReducers({
    projects: projectReducer
});

export default rootReducer;