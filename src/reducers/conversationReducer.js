import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function conversationReducer(state = initialState.conversations, action) {
  switch(action.type) {
    case types.LOAD_CONVERSATIONS_SUCCESS:{
      return [
        ...state,
        // Don't overwrite conversations that are already in the state (populated with messages)
        ...action.conversations.filter(convo => state.findIndex(c => c.id === convo.id) === -1),
      ];
    }
    case types.LOAD_CONVERSATION_SUCCESS: {
      let index = state.findIndex(convo => convo.id === action.conversation.id);
      return [
        ...state.slice(0, index),
        Object.assign({}, action.conversation),
        ...state.slice(index + 1)
      ];
    }
    default:
      return state;
  }
}
