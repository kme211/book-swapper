import React, {PropTypes} from 'react';
import styled from 'styled-components';
import P from 'components/atoms/Paragraph';
import { colors } from 'components/globals';

const Wrapper = styled.div`
  margin-bottom: 1em;
`;

const Message = (props) => {
  return (
    <Wrapper>
      <P>{props.sender}</P>
      <P>{props.body}</P>
      <P color="gray">{props.timestamp}</P>
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
