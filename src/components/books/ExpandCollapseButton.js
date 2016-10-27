import React, { PropTypes } from 'react';
import styled from 'styled-components';
import Icon from '../atoms/Icon';

const Wrapper = styled.button`
  font-size: 14px;
  margin-left: 6px;
  color: #eee;
  border: none;
  background-color: #6C737E;
  border-radius: 4px;
  padding: .25em .5em;
`;

const ExpandCollapseButton = (props) => {
  return (
    <Wrapper className="expand-collapse-btn" onClick={props.onClick}>
      <Icon icon={props.icon}/>
    </Wrapper>
  );
};

ExpandCollapseButton.propTypes = {
  onClick: React.PropTypes.func.isRequired,
  icon: React.PropTypes.string.isRequired
};

export default ExpandCollapseButton;
