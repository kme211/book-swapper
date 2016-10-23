import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const ConversationRow = (props) => {
  return (
    <tr>
      <td>{props.participant} </td>
      <td><Link to={'message/' + props.id}>{props.subject}</Link> </td>
      <td>{props.lastMessageBody} </td>
      <td>{props.lastMessageTimestamp} </td>
      <td>{props.lastMessageReadStatus}</td>
    </tr>
  );
};

ConversationRow.propTypes = {
  id: PropTypes.string.isRequired,
  participant: PropTypes.string.isRequired,
  subject: PropTypes.string.isRequired,
  lastMessageBody: PropTypes.string.isRequired,
  lastMessageTimestamp: PropTypes.string.isRequired,
  lastMessageReadStatus: PropTypes.string.isRequired
};

export default ConversationRow;
