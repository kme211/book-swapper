import delay from './delay';
import messageApi from './mockMessageApi';

const conversations = [
  {
    id: 'convo0',
    subject: 'Request to borrow Red Rising',
    participants: ['clatterbuck', 'vazques'],
    messages: ['msg0', 'msg1']
  },
  {
    id: 'convo1',
    subject: 'Hi',
    participants: ['jamie', 'everett'],
    messages: ['msg2', 'msg3']
  }, {
    id: 'convo2',
    subject: 'Welcome',
    participants: ['lamey', 'everett'],
    messages: ['msg4', 'msg5']
  }
];

class ConversationApi {
  static getConversationsForUser(userId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const convos = conversations.filter(c => c.participants.find(id => id === userId));
        const messageReqs = convos.map(convo => {
          const msgs = convo.messages;
          const lastMessageId = msgs[msgs.length - 1];
          return messageApi.getMessage(lastMessageId);
        });

        Promise.all(messageReqs).then(messages => {
          resolve(convos.map(convo => Object.assign({}, convo, {lastMessage: messages.find(m => m.conversationId === convo.id)})));
        });
      }, delay);
    });
  }
}

export default ConversationApi;
