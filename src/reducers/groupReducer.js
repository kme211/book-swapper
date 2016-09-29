import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function groupReducer(state = initialState.groups, action) {
  switch(action.type) {
    case types.LOAD_GROUP_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.group)
      ];
    default:
      return state;
  }
}
