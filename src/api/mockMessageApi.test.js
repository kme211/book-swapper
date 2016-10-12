import expect from 'expect';
import messageApi from './mockMessageApi';

describe('mockMessageApi', () => {
  it('should return the message for the given message id', (done) => {
    const expected = {
      id: 'msg0',
      sender: 'vazques',
      timestamp: 'Wed Oct 12 2016 12:16:37 GMT-0500 (Central Daylight Time)',
      body: 'Hi! I\'d like to borrow Red Rising from you.',
      conversationId: 'convo0',
      read: true
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
        timestamp: 'Wed Oct 12 2016 12:16:37 GMT-0500 (Central Daylight Time)',
        body: 'Hi! I\'d like to borrow Red Rising from you.',
        conversationId: 'convo0',
        read: true
      },
      {
        id: 'msg1',
        sender: 'clatterbuck',
        timestamp: 'Wed Oct 12 2016 12:17:03 GMT-0500 (Central Daylight Time)',
        body: 'Sure! What day do you wanna pick it up?',
        conversationId: 'convo0',
        read: true
      }
    ];

    messageApi.getMessagesForConversation('convo0').then(actual => {
      expect(actual).toEqual(expected);
      done();
    });
  });
});
