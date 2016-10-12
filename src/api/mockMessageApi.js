import delay from './delay';

const messages = [
  {
    id: 'msg0',
    sender: 'vazques',
    timestamp: '1476220156018',
    body: 'Hi! I\'d like to borrow Red Rising from you.',
    conversationId: 'convo0',
    read: true
  },
  {
    id: 'msg1',
    sender: 'clatterbuck',
    timestamp: '1476221078364',
    body: 'Sure! What day do you wanna pick it up?',
    conversationId: 'convo0',
    read: true
  },
  {
    id: 'msg2',
    sender: 'jamie',
    timestamp: '1476223472556',
    body: 'Hi! I\'m new to the group and I noticed we like the same kind of books.',
    conversationId: 'convo1',
    read: true
  },
  {
    id: 'msg3',
    sender: 'everett',
    timestamp: '1476221078364',
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
