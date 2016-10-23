import React, {PropTypes} from 'react';

const Message = (props) => {
  return (
    <div>
      <h4>{props.sender}</h4>
      <p>
      {props.body}
      </p>
      <p>{props.timestamp}</p>
    </div>
  );
};

Message.propTypes = {
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  read: PropTypes.bool.isRequired,
  timestamp: PropTypes.string.isRequired
};

export default Message;
