import {combineReducers} from 'redux';
import groups from './groupReducer';
import user from './userReducer';
import conversations from './conversationReducer';

const rootReducer = combineReducers({
  groups,
  user,
  conversations
});

export default rootReducer;
