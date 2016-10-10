import { createSelector } from 'reselect';
import flatMap from 'lodash/flatMap';
import uniq from 'lodash/uniq';
import uniqBy from 'lodash/uniqBy';

const groupsSelector = state => state.groups;

export const getGroupsUsersSelector = createSelector(
  groupsSelector,
  groups => flatMap(groups, group => group.users)
);

export const getGroupsBooks = createSelector(
  getGroupsUsersSelector,
  users => uniqBy(flatMap(users, user => user.books), 'id')
);

export const getGroupsCategories = createSelector(
  getGroupsBooks,
  books => uniq(flatMap(books, book => book.categories))
);

export const getGroupsTags = createSelector(
  getGroupsBooks,
  books => flatMap(books, book => book.tags)
);
