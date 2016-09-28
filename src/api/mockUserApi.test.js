import expect from 'expect';
import userApi from './mockUserApi';

describe('mockUserApi', () => {
  describe('getUser', () => {
    it('should return an object when passed an id', (done) => {
      userApi.getUser('clatterbuck').then(user => {
        expect(user).toBeA('object');
        done();
      });
    });

    it('should return the correct user', (done) => {
      userApi.getUser('vazques').then(user => {
        expect(user.firstName).toBe('Verdell');
        done();
      });
    });

    it('should return an error if user cannot be found', (done) => {
      userApi.getUser('keari').then(user => {}, err => {
        expect(err).toBe('User not found.');
        done();
      });
    });

    it('should populate the user\'s books', (done) => {
      userApi.getUser('lamey').then(user => {
        expect(user.books[0].title).toBe('We Need to Talk About Kevin');
        done();
      });
    });
  });
});
