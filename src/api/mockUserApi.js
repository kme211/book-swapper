import delay from './delay';
import bookApi from './mockBookApi';

const users = [
  {
    id: 'clatterbuck',
    firstName: 'Cathryn',
    lastName: 'Clatterbuck',
    email: 'cclatterbuck@gmail.com',
    books: [
      {id: 'red-rising'}
    ],
    groups: [
      'meadowbrook'
    ]
  },{
    id: 'vazques',
    firstName: 'Verdell',
    lastName: 'Vazques',
    email: 'vazques@gmail.com',
    books: [
      {id: 'do-androids-dream'}
    ],
    groups: [
      'meadowbrook'
    ]
  },{
    id: 'vanderslice',
    firstName: 'Victor',
    lastName: 'Vanderslice',
    email: 'Vanderslice@gmail.com',
    books: [
      {id: 'children-of-dune'}
    ],
    groups: [
      'meadowbrook'
    ]
  },{
    id: 'lamey',
    firstName: 'Laurena',
    lastName: 'Lamey',
    email: 'Lamey@gmail.com',
    books: [
      {id: 'we-need-to-talk'}
    ],
    groups: [
      'meadowbrook'
    ]
  },{
    id: 'estes',
    firstName: 'Elizebeth',
    lastName: 'Estes',
    email: 'Lamey@gmail.com',
    books: [
      {id: 'american-gods'}
    ],
    groups: [
      'meadowbrook'
    ]
  }
];

class UserApi {
  static getUser(id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const user = users.find(author => author.id === id);
        if(user) {
          const bookReqs = user.books.map(book => {
            return bookApi.getBook(book.id);
          });

          Promise.all(bookReqs).then(books => {
            user.books = user.books.map(book => {
              return books.find(b => b.id === book.id);
            });
            resolve(Object.assign({}, user));
          });

        } else {
          reject('User not found.');
        }
      }, delay);
    });
  }
}

export default UserApi;
