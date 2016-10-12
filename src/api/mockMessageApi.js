import delay from './delay';

const messages = [
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
  },
  {
    id: 'msg2',
    sender: 'jamie',
    timestamp: 'Wed Oct 12 2016 12:17:15 GMT-0500 (Central Daylight Time)',
    body: 'Hi! I\'m new to the group and I noticed we like the same kind of books.',
    conversationId: 'convo1',
    read: true
  },
  {
    id: 'msg3',
    sender: 'everett',
    timestamp: 'Wed Oct 12 2016 12:17:26 GMT-0500 (Central Daylight Time)',
    body: 'Hey, welcome! Yeah, looks like we do! Have you read Programming Javascript Applications yet?',
    conversationId: 'convo1',
    read: false
  }
];

class MessageApi {
  static getMessage(id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const message = messages.find(m => m.id === id);
        resolve(message);
      }, delay);
    });
  }

  static getMessagesForConversation(conversationId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(messages.filter(m => m.conversationId === conversationId));
        }, delay);
    });
  }
}

export default MessageApi;
