import * as types from './actionTypes';
import userApi from '../api/mockUserApi';
import bookApi from '../api/mockBookApi';

export function loadUserSuccess(user) {
  return { type: types.LOAD_USER_SUCCESS, user };
}

export function createBookSuccess(book) {
  return { type: types.CREATE_BOOK_SUCCESS, book };
}

export function loadUser(id) {
  return function(dispatch) {
    return userApi.getUser(id).then(user => {
      dispatch(loadUserSuccess(user));
    }).catch(err => {
      throw(err);
    });
  };
}

export function saveBook(book) {

}
