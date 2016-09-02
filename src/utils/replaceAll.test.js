import expect from 'expect';
import replaceAll from './replaceAll';

describe('replaceAll', () => {
  it('should replace all instances of the given search string with given replacement', () => {
    const actual = replaceAll('this-is-a-string-with-a-lot-of-dashes', '-', ' ');
    const expected = 'this is a string with a lot of dashes';
    expect(actual).toEqual(expected);
  });
});
