import delay from './delay';

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
        resolve(Object.assign({}, users.find(author => author.id === id)))
      }, delay);
    })
  }
}

export default UserApi;
