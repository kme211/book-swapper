import * as types from './actionTypes';
import conversationApi from '../api/mockConversationApi';

export function loadConversationsSuccess(conversations) {
  return { type: types.LOAD_CONVERSATIONS_SUCCESS, conversations };
}

export function loadConversationSuccess(conversation) {
  return { type: types.LOAD_CONVERSATION_SUCCESS, conversation };
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

export function loadConversation(id) {
  return function(dispatch) {
    let messageReqs = [];
    return conversationApi.getConversation(id).then(convo => {
      dispatch(loadConversationSuccess(convo));
    }).catch(err => {
      throw(err);
    });
  };
}
