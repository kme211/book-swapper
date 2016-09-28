import expect from 'expect';
import bookApi from './mockBookApi';

describe('mockBookApi', () => {
  describe('getBook', () => {
    it('should return an object when passed an id', (done) => {
      bookApi.getBook('we-need-to-talk').then(book => {
        expect(book).toBeA('object');
        done();
      });
    });

    it('should return the correct book', (done) => {
      bookApi.getBook('we-need-to-talk').then(book => {
        expect(book.title).toBe('We Need to Talk About Kevin');
        done();
      });
    });

    it('should return an error if book cannot be found', (done) => {
      bookApi.getBook('keari').then(user => {}, err => {
        expect(err).toBe('Book not found.');
        done();
      });
    });
  });
});
