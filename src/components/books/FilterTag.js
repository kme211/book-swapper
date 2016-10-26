import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { colors } from 'components/globals';
import Tag from 'components/books/Tag';

const Wrapper = styled(Tag)`
  background-color: ${props => props.active ? colors.green : 'white'};
  color: ${props => props.active ? 'white' : colors.grayscale[1]};
  border: ${props => props.active ? '1px solid #E6E6E6' : '1px dashed ' + colors.grayscale[1]};
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
