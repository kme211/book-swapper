import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import Loader from '../common/Loader';
import ConversationRow from './ConversationRow';
import timeSince from '../../utils/timeSince';
import pick from 'lodash/pick';

export class MessagesPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.renderComponent = this.renderComponent.bind(this);
    this.renderLoader = this.renderLoader.bind(this);
  }

  renderComponent() {
    return (
      <table>
        <tbody>
          {this.props.conversations.map((c, i) => {
            return  (
              <ConversationRow
                key={c.id}
                {...pick(c, ['subject'])}
                participant={c.participants.find(p => p !== this.props.user.id)}
                lastMessageBody={c.lastMessage.body}
                lastMessageTimestamp={timeSince(c.lastMessage.timestamp)}
                lastMessageReadStatus={c.lastMessage.read ? 'Read' : 'Unread'}
              />
            );
          })}
        </tbody>
      </table>
    );
  }

  renderLoader() {
    return <Loader message="Loading messages"/>;
  }

  render() {
    return (
      <div className="container">
      <h2 className="sub-header">Messages</h2>
        {this.renderComponent()}
      </div>
    );
  }
}

MessagesPage.propTypes = {
  user: PropTypes.object.isRequired,
  conversations: PropTypes.array.isRequired
};

MessagesPage.contextTypes = {
  router: PropTypes.object
};

function mapStateToProps(state) {
  return {
    user: state.user,
    conversations: [{
      id: 'convo0',
      subject: 'Request to borrow Red Rising',
      participants: ['clatterbuck', 'vazques'],
      messages: ['msg0', 'msg1'],
      lastMessage: {
        id: 'msg1',
        sender: 'clatterbuck',
        timestamp: 'Wed Oct 12 2016 12:17:03 GMT-0500 (Central Daylight Time)',
        body: 'Sure! What day do you wanna pick it up?',
        conversationId: 'convo0',
        read: false
      }
    }, {
      id: 'convo1',
      subject: 'Welcome!',
      participants: ['clatterbuck', 'vazques'],
      messages: ['msg0', 'msg1'],
      lastMessage: {
        id: 'msg4',
        sender: 'vazques',
        timestamp: 'Fri Aug 12 2016 00:00:00 GMT-0500 (Central Daylight Time)',
        body: 'Hey, welcome to the group!',
        conversationId: 'convo1',
        read: true
      }
    }]
  };
}

export default connect(mapStateToProps)(MessagesPage);
