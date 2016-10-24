import React, {PropTypes} from 'react';
import styled from 'styled-components';

const Sender = styled.h4`
  color: red'
`;

const Body = styled.p`
  margin: 0.5em 0;
`;

const Timestamp = styled.p`
  color: gray;
  font-size: 0.75em;
`;

const Wrapper = styled.div`
  margin-bottom: 1em;
`;

const Message = (props) => {
  return (
    <Wrapper>
      <Sender>{props.sender}</Sender>
      <Body>
      {props.body}
      </Body>
      <Timestamp>{props.timestamp}</Timestamp>
    </Wrapper>
  );
};

Message.propTypes = {
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  read: PropTypes.bool.isRequired,
  timestamp: PropTypes.string.isRequired
};

export default Message;
