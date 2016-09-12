import flatten from 'lodash/flatten';

export default function getTags(categories) {
  return flatten(categories.map(cat => cat.split('/').map(tag => tag.trim())));
}
