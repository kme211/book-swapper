import expect from 'expect';
import truncateText from './truncateText';

describe('truncateText', () => {
  it('should return a truncated version of the given string up to the maximum length given ', () => {
    const actual = truncateText('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam accumsan consectetur commodo. Fusce eleifend lobortis eros sit amet tristique.', 10);
    const expected = 'Lorem i...';
    expect(actual).toEqual(expected);
  });
});
