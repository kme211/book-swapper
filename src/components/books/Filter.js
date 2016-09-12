import React, { PropTypes } from 'react';
import FilterTag from './FilterTag';
import escape from 'lodash/escape';

const Filter = (props) => {
  let wrapperClass = 'filter';
  let buttonClass = `${wrapperClass}__button`;
  const contentsClass = `${wrapperClass}__contents`;
  if(props.show) {
    wrapperClass += ' show';
    buttonClass += ' active';
  }

  return (
    <div className={wrapperClass}>
      <button className={buttonClass} onClick={props.onButtonClick}>Filter</button>
      <ul className={contentsClass}>
        {props.tags.map((tag, index) => <FilterTag key={index} tag={tag} active={props.filters[escape(tag)] === 'show'} onClick={props.onTagClick}/>)}
      </ul>
    </div>
  );
};

Filter.propTypes = {
  show: React.PropTypes.bool.isRequired,
  tags: React.PropTypes.array.isRequired,
  filters: React.PropTypes.object.isRequired,
  onButtonClick: React.PropTypes.func.isRequired,
  onTagClick: React.PropTypes.func.isRequired
};

export default Filter;
