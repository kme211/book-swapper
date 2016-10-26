import React, { PropTypes } from 'react';
import FluidContainer from 'react-fluid-container';

const Collapse = ({isOpen, children}) => (
  <FluidContainer
    height={isOpen ? 'auto' : 0}
    style={{overflow: 'hidden'}}
    children={children}
  />
);

Collapse.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  children: PropTypes.element
};

export default Collapse;
