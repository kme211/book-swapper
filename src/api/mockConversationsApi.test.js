import expect from 'expect';
import conversationApi from './mockConversationApi';

describe('mockConversationApi', () => {
  it('should return an array of conversations for given user id populated with a snippet of last message', (done) => {
    const expected = [{
      id: 'convo0',
      subject: 'Request to borrow Red Rising',
      participants: ['clatterbuck', 'vazques'],
      messages: ['msg0', 'msg1'],
      lastMessage: 'Sure! What day do you wanna pick it up?'
    }];

    conversationApi.getConversationsForUser('clatterbuck').then(actual => {
      expect(actual).toEqual(expected);
      done();
    });

  });

});
