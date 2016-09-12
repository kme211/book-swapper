import expect from 'expect';
import getUniqueTags from './getUniqueTags';

describe('getUniqueTags', () => {
  it('should return an array of unique, trimmed tags', () => {
    const actual = getUniqueTags(["Fiction / Action & Adventure", "Fiction / Science Fiction / Action & Adventure", "Fiction / Dystopian"]);
    const expected = ['Fiction', 'Action & Adventure', 'Science Fiction', 'Dystopian'];
    expect(actual).toEqual(expected);
  });
});
