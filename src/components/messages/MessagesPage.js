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
    conversations: state.conversations
  };
}

export default connect(mapStateToProps)(MessagesPage);
