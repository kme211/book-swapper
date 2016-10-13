import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function groupReducer(state = initialState.conversations, action) {
  switch(action.type) {
    case types.LOAD_CONVERSATIONS_SUCCESS:
      return [
        ...state,
        ...action.conversations
      ];
    default:
      return state;
  }
}
