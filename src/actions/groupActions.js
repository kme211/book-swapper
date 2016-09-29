import * as types from './actionTypes';
import groupApi from '../api/mockGroupApi';

export function loadGroupSuccess(group) {
  return { type: types.LOAD_GROUP_SUCCESS, group };
}

export function loadGroup(id) {
  return function(dispatch) {
    return groupApi.getGroup(id).then(group => {
      dispatch(loadGroupSuccess(group));
    }).catch(err => {
      throw(err);
    });
  };
}
