import expect from 'expect';
import bookApi from './mockBookApi';
import omit from 'lodash/omit';

describe('mockBookApi', () => {

  const testBook = {
    title: 'Ender\'rs Game',
    author: 'Orson Scott Card',
    desc: 'Ender thinks he is playing computer simulated war games at the Battle School; he is, in fact, engaged in something far more desperate. Ender is the most talented result of Earth\'s desperate quest to create the military genius that the planet needs in its all-out war with an alien enemy.',
    industryIdentifiers: [
     {
      "type": "ISBN_10",
      "identifier": "0765317389"
     },
     {
      "type": "ISBN_13",
      "identifier": "9780765317384"
     }
   ],
   categories: [
     "Fiction / Sagas",
     "Fiction / Science Fiction / General",
     "Fiction / Science Fiction / Action & Adventure",
     "Fiction / Science Fiction / Space Opera",
     "Fiction / Science Fiction / Military"
    ]
  };

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

  describe('saveBook', () => {

    it('should return a Promise', (done) => {
      const actual = bookApi.saveBook(Object.assign({}, testBook));
      expect(actual).toBe(Promise);
    });

    describe('should throw an error if not all required parameters are not passed', () => {
      it('title is required', (done) => {
        bookApi.saveBook(omit(testBook, 'title')).then(book => {}, err => {
          expect(err).toBe('Book is missing required parameters');
          done();
        });
      });

      it('author is required', (done) => {
        bookApi.saveBook(omit(testBook, 'author')).then(book => {}, err => {
          expect(err).toBe('Book is missing required parameters');
          done();
        });
      });

      it('industryIdentifiers is required', (done) => {
        bookApi.saveBook(omit(testBook, 'industryIdentifiers')).then(book => {}, err => {
          expect(err).toBe('Book is missing required parameters');
          done();
        });
      });

      it('categories is required', (done) => {
        bookApi.saveBook(omit(testBook, 'categories')).then(book => {}, err => {
          expect(err).toBe('Book is missing required parameters');
          done();
        });
      });

      it('desc is required', (done) => {
        bookApi.saveBook(omit(testBook, 'desc')).then(book => {}, err => {
          expect(err).toBe('Book is missing required parameters');
          done();
        });
      });
    });

    it('should return the found book in the books array if book is already in the array', (done) => {
      const duplicate = {
        title: 'Me Talk Pretty One Day',
        author: 'David Sedaris',
        industryIdentifiers: [
          {
           "type": "ISBN_10",
           "identifier": "0316073652"
          },
          {
           "type": "ISBN_13",
           "identifier": "9780316073653"
          }
        ],
        categories: [
         "Humor / Form / Essays"
        ],
        desc: 'A new collection from David Sedaris is cause for jubilation. His recent move to Paris has inspired hilarious pieces, including Me Talk Pretty One Day, about his attempts to learn French. His family is another inspiration. You Cant Kill the Rooster is a portrait of his brother who talks incessant hip-hop slang to his bewildered father. And no one hones a finer fury in response to such modern annoyances as restaurant meals presented in ludicrous towers and cashiers with 6-inch fingernails. Compared by The New Yorker to Twain and Hawthorne, Sedaris has become one of our best-loved authors. Sedaris is an amazing reader whose appearances draw hundreds, and his performancesincluding a jaw-dropping impression of Billie Holiday singing I wish I were an Oscar Meyer weinerare unforgettable. Sedariss essays on living in Paris are some of the funniest hes ever written. At last, someone even meaner than the French! The sort of blithely sophisticated, loopy humour that might have resulted if Dorothy Parker and James Thurber had had a love child. Entertainment Weekly on Barrel Fever Sidesplitting Not one of the essays in this new collection failed to crack me up; frequently I was helpless. The New York Times Book Review on Naked'
      };
      const actualBook = {
        id: 'me-talk-pretty-one-day',
        title: 'Me Talk Pretty One Day',
        author: 'David Sedaris',
        industryIdentifiers: [
          {
           "type": "ISBN_10",
           "identifier": "0316073652"
          },
          {
           "type": "ISBN_13",
           "identifier": "9780316073653"
          }
        ],
        categories: [
         "Humor / Form / Essays"
        ],
        tags: ["funny"],
        link: '#',
        availability: [{owner: "jamie", status: "available"}],
        desc: 'A new collection from David Sedaris is cause for jubilation. His recent move to Paris has inspired hilarious pieces, including Me Talk Pretty One Day, about his attempts to learn French. His family is another inspiration. You Cant Kill the Rooster is a portrait of his brother who talks incessant hip-hop slang to his bewildered father. And no one hones a finer fury in response to such modern annoyances as restaurant meals presented in ludicrous towers and cashiers with 6-inch fingernails. Compared by The New Yorker to Twain and Hawthorne, Sedaris has become one of our best-loved authors. Sedaris is an amazing reader whose appearances draw hundreds, and his performancesincluding a jaw-dropping impression of Billie Holiday singing I wish I were an Oscar Meyer weinerare unforgettable. Sedariss essays on living in Paris are some of the funniest hes ever written. At last, someone even meaner than the French! The sort of blithely sophisticated, loopy humour that might have resulted if Dorothy Parker and James Thurber had had a love child. Entertainment Weekly on Barrel Fever Sidesplitting Not one of the essays in this new collection failed to crack me up; frequently I was helpless. The New York Times Book Review on Naked'
      };
      bookApi.saveBook(duplicate).then(book => {
        expect(book).toEqual(actualBook);
        done();
      });
    });

    it('should return an object', (done) => {
      bookApi.saveBook(Object.assign({}, testBook)).then(book => {
        expect(book).toBeAn('object');
        done();
      });
    });

    it('returned object should contain an ID (string)', (done) => {
      bookApi.saveBook(Object.assign({}, testBook)).then(book => {
        expect(book.id).toBeA('string');
        expect(book.id.length).toBeGreaterThan(0);
        done();
      });
    });

    it('returned object should contain a property called availability which is an empty array', (done) => {
      bookApi.saveBook(Object.assign({}, testBook)).then(book => {
        expect(book.availability).toEqual([]);
        done();
      });
    });

    it('returned object should contain a property called tags which is an empty array', (done) => {
      bookApi.saveBook(Object.assign({}, testBook)).then(book => {
        expect(book.tags).toEqual([]);
        done();
      });
    });

  });
});
