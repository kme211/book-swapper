import expect from 'expect';
import groupApi from './mockGroupApi';

describe('mockGroupApi', () => {
  describe('getGroup', () => {
    it('should return an object when passed an id', (done) => {
      groupApi.getGroup('meadowbrook').then(group => {
        expect(group).toBeA('object');
        done();
      });
    });

    it('should return the correct group', (done) => {
      groupApi.getGroup('meadowbrook').then(group => {
        expect(group.name).toBe('Meadowbrook');
        done();
      });
    });

    it('should return an error if group cannot be found', (done) => {
      groupApi.getGroup('not-in-db').then(group => {}, err => {
        expect(err).toBe('Group not found.');
        done();
      });
    });

    it('should populate the group\'s users', (done) => {
      groupApi.getGroup('meadowbrook').then(group => {
        expect(group.users[0].firstName).toBe('Cathryn');
        expect(group.users[1].firstName).toBe('Verdell');
        expect(group.users[4].firstName).toBe('Laurena');
        done();
      });
    });

    it('should include the group\'s users\' books', (done) => {
      groupApi.getGroup('meadowbrook').then(group => {
        expect(group.users[0].books[0].title).toBe('Red Rising');
        expect(group.users[1].books[0].title).toBe('Do Androids Dream of Electric Sheep?');
        done();
      });
    });
  });
});
