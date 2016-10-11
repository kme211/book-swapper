import expect from 'expect';
import messageApi from './mockMessageApi';

describe('mockMessageApi', () => {
  it('should return the message for the given message id', (done) => {
    const expected = {
      id: 'msg0',
      sender: 'vazques',
      timestamp: '1476220156018',
      body: 'Hi! I\'d like to borrow Red Rising from you.',
      conversationId: 'convo0'
    };

    messageApi.getMessage('msg0').then(actual => {
      expect(actual).toEqual(expected);
      done();
    });
  });

  it('should return an array of messages for a given conversation id', (done) => {
    const expected = [
      {
        id: 'msg0',
        sender: 'vazques',
        timestamp: '1476220156018',
        body: 'Hi! I\'d like to borrow Red Rising from you.',
        conversationId: 'convo0'
      },
      {
        id: 'msg1',
        sender: 'clatterbuck',
        timestamp: '1476221078364',
        body: 'Sure! What day do you wanna pick it up?',
        conversationId: 'convo0'
      }
    ];

    messageApi.getMessagesForConversation('convo0').then(actual => {
      expect(actual).toEqual(expected);
      done();
    });
  });
});
