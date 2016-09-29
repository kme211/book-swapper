import delay from './delay';
import userApi from './mockUserApi';

const groups = [
  {
    id: 'meadowbrook',
    name: 'Meadowbrook',
    users: [
      {id: 'clatterbuck'},
      {id: 'vazques'},
      {id: 'vanderslice'},
      {id: 'estes'},
      {id: 'lamey'}
    ]
  }, {
    id: 'mlink',
    name: 'MLink Technologies',
    users: [
      {id: 'lamey'},
      {id: 'jamie'},
      {id: 'everett'}
    ]
  }
];

class groupApi {
  static getGroup(id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const group = groups.find(group => group.id === id);
        if(group) {
          const userReqs = group.users.map(user => {
            return userApi.getUser(user.id);
          });

          Promise.all(userReqs).then(users => {
            group.users = group.users.map(user => {
              return users.find(u => u.id === user.id);
            });
            resolve(Object.assign({}, group));
          });
        } else {
          reject('Group not found.');
        }
      }, delay);
    });
  }
}

export default groupApi;
