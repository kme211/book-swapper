import expect from 'expect';
import getTags from './getTags';

describe('getTags', () => {
  it('return an array of tags from the given array of strings of / delimited tags/categories', () => {
    const actual = getTags(["Fiction / Action & Adventure", "Fiction / Science Fiction / Action & Adventure", "Fiction / Dystopian"]);
    const expected = ['Fiction', 'Action & Adventure', 'Fiction', 'Science Fiction', 'Action & Adventure', 'Fiction', 'Dystopian'];
    expect(actual).toEqual(expected);
  });
});
