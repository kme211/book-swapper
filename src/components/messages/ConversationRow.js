import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import styled from 'styled-components';
import { colors } from 'components/globals';

const Row = styled.tr`
  background-color: ${props => props.readStatus === 'unread' ? colors.grayscale[6] : colors.grayscale[4]};
`;

const Cell = styled.td`
  padding: 0.75em;
`;

const ConversationRow = (props) => (
  <Row read={props.lastMessageReadStatus}>
    <Cell>{props.participant} </Cell>
    <Cell><Link to={'message/' + props.id}>{props.subject} - {props.lastMessageBody}</Link> </Cell>
    <Cell>{props.lastMessageTimestamp} </Cell>
  </Row>
);

ConversationRow.propTypes = {
  id: PropTypes.string.isRequired,
  participant: PropTypes.string.isRequired,
  subject: PropTypes.string.isRequired,
  lastMessageBody: PropTypes.string.isRequired,
  lastMessageTimestamp: PropTypes.string.isRequired,
  lastMessageReadStatus: PropTypes.string.isRequired
};

export default ConversationRow;
