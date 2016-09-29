import {combineReducers} from 'redux';
import groups from './groupReducer';
import user from './userReducer';

const rootReducer = combineReducers({
  groups,
  user
});

export default rootReducer;
