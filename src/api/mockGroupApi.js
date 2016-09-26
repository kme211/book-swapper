import delay from './delay';

const groups = [
  {
    id: 'meadowbrook',
    name: 'Meadowbrook',
    users: [
      {id: 'clatterbuck'},
      {id: 'vazques'},
      {id: 'vanderslice'},
      {id: 'lamey'},
      {id: 'estes'}
    ]
  }
];

class groupApi {
  static getGroup(id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign({}, groups.find(group => group.id === id)));
      }, delay);
    });
  }
}

export default groupApi;
