import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { colors } from 'components/globals';

const Wrapper = styled.li`
  background-color: ${props => props.active ? colors.green : 'white'};
  border-radius: 6px;
  margin: 2px 2px 40px 2px;
  padding: 3px 8px;
  display: inline-block;
  color: ${props => props.active ? 'white' : colors.grayscale[1]};
  border: ${props => props.active ? '1px solid #E6E6E6' : '1px dashed ' + colors.grayscale[1]};
  cursor: pointer;
`;

const FilterTag = (props) => (
  <Wrapper active={props.active} onClick={props.onClick}>{props.tag}</Wrapper>
);

FilterTag.propTypes = {
  tag: React.PropTypes.string.isRequired,
  active: React.PropTypes.bool.isRequired,
  onClick: React.PropTypes.func.isRequired
};

export default FilterTag;
