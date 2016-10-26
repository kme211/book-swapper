import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import Loader from '../common/Loader';
import ConversationRow from './ConversationRow';
import timeSince from '../../utils/timeSince';
import pick from 'lodash/pick';
import Heading from 'components/atoms/Heading';
import styled from 'styled-components';
import { colors } from 'components/globals';

const Table = styled.table`
border-collapse: collapse;
width: 100%;
`;

export class MessagesPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.renderComponent = this.renderComponent.bind(this);
    this.renderLoader = this.renderLoader.bind(this);
  }

  renderComponent() {
    return (
      <Table>
        <tbody>
          {this.props.conversations.map((c, i) => {
            const lastMessage = c.messages[c.messages.length-1];
            return  (
              <ConversationRow
                key={c.id}
                {...pick(c, ['subject'])}
                id={c.id}
                participant={c.participants.find(p => p !== this.props.user.id)}
                lastMessageBody={lastMessage.body}
                lastMessageTimestamp={timeSince(lastMessage.timestamp)}
                lastMessageReadStatus={lastMessage.read ? 'Read' : 'Unread'}
              />
            );
          })}
        </tbody>
      </Table>
    );
  }

  renderLoader() {
    return <Loader message="Loading messages"/>;
  }

  render() {
    return (
      <div>
        <Heading level={2}>Messages</Heading>
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
