import expect from 'expect';
import slugifyText from './slugifyText';

describe('slugifyText', () => {
  it('should return a lowercase string with hyphens instead of spaces and no pucntuation ', () => {
    const actual = slugifyText('Ender\'s Game');
    const expected = 'enders-game';
    expect(actual).toEqual(expected);
  });
});
