import React, { PropTypes } from 'react';

const ExpandCollapseButton = (props) => {
  return (
    <button className="expand-collapse-btn" onClick={props.onClick}>
      <i className={"fa fa-chevron-" + props.icon} aria-hidden="true"/>
    </button>
  );
};

ExpandCollapseButton.propTypes = {
  onClick: React.PropTypes.func.isRequired,
  icon: React.PropTypes.string.isRequired
};

export default ExpandCollapseButton;
