import * as types from './actionTypes';
import conversationApi from '../api/mockConversationApi';

export function loadConversationsSuccess(conversations) {
  return { type: types.LOAD_CONVERSATIONS_SUCCESS, conversations };
}

export function loadConversationsForUser(id) {
  return function(dispatch) {
    return conversationApi.getConversationsForUser(id).then(conversations => {
      dispatch(loadConversationsSuccess(conversations));
    }).catch(err => {
      throw(err);
    });
  };
}
