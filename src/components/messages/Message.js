import React, {PropTypes} from 'react';
import { StyleSheet, css } from 'aphrodite';

const Message = (props) => {
  return (
    <div className={css(styles.message)}>
      <h4>{props.sender}</h4>
      <p className={css(styles.body)}>
      {props.body}
      </p>
      <p className={css(styles.timestamp)}>{props.timestamp}</p>
    </div>
  );
};

Message.propTypes = {
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  read: PropTypes.bool.isRequired,
  timestamp: PropTypes.string.isRequired
};

const styles = StyleSheet.create({
  message: {
    marginBottom: '1em'
  },
  body: {
    margin: '0.5em 0'
  },
  timestamp: {
      color: 'gray',
      fontSize: '0.75em'
  },
});

export default Message;
