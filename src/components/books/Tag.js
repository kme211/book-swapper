import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { colors } from 'components/globals';

const Tag = styled.li`
  background-color: ${colors.grayscale[4]};
  border-radius: 6px;
  margin: 2px 2px 40px 2px;
  padding: 3px 8px;
  display: inline-block;
  cursor: pointer;
`;

export default Tag;
