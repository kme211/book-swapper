import React, {PropTypes} from 'react';

const ConversationRow = (props) => {
  return (
    <tr>
      <td>{props.participant} </td>
      <td>{props.subject} </td>
      <td>{props.lastMessageBody} </td>
      <td>{props.lastMessageTimestamp} </td>
      <td>{props.lastMessageReadStatus}</td>
    </tr>
  );
};

ConversationRow.propTypes = {
  participant: PropTypes.string.isRequired,
  subject: PropTypes.string.isRequired,
  lastMessageBody: PropTypes.string.isRequired,
  lastMessageTimestamp: PropTypes.string.isRequired,
  lastMessageReadStatus: PropTypes.string.isRequired
};

export default ConversationRow;
