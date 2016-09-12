import React, { PropTypes } from 'react';

const FilterTag = (props) => {

  let checkBoxClass = "filter__tag";
  if(props.active) {
    checkBoxClass += ' active';
  }

  return (
    <li className={checkBoxClass} onClick={props.onClick}>{props.tag}</li>
  );
};

FilterTag.propTypes = {
  tag: React.PropTypes.string.isRequired,
  active: React.PropTypes.bool.isRequired,
  onClick: React.PropTypes.func.isRequired
};

export default FilterTag;
