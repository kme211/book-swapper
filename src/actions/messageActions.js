import * as types from './actionTypes';
import messageApi from '../api/mockMessageApi';

export function loadConversationMessagesSuccess(messages) {
  return { type: types.BEGIN_REQUEST_CONVERSATION_MESSAGES, messages };
}

export function loadConversationMessages(id) {
  return function(dispatch) {
    let messageReqs = [];
    return messageApi.getMessage(id).then(user => {
      dispatch(loadUserSuccess(user));
    }).catch(err => {
      throw(err);
    });
  };
}

export function saveBook(book) {

}
