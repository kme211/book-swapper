import union from 'lodash/union';
import getTags from './getTags';

export default function getUniqueTags(categories) {
  return union(getTags(categories));
}
