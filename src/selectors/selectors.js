import flatMap from 'lodash/flatMap';

export function groupBooks(group) {
  return flatMap(group.users, user => user.books);
}

// TODO: Add selectors for getting all the tags and categories of the books
