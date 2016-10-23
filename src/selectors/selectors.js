import { createSelector } from 'reselect';
import flatMap from 'lodash/flatMap';
import uniq from 'lodash/uniq';
import uniqBy from 'lodash/uniqBy';

const groupsSelector = state => state.groups;
const conversationsSelector = state => state.conversations;

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

const getId = (state, props) => props.params.id;

export const makeGetMessages = () => {
  return createSelector(
    [getId, conversationsSelector],
    (id, conversations) => {
      const conversation = conversations.find(convo => convo.id === id);
      if(conversation) {
        console.log('return messages from selector');
        return conversation.messages;
      }
    }
  );
};
