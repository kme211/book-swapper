import React, { PropTypes } from 'react';
import FilterTag from './FilterTag';
import escape from 'lodash/escape';
import cuid from 'cuid';
import CategoryBrowser from './CategoryBrowser';

const createCategoryNode = (categories, parentPath, parentId, arr) => {
  if(categories.length) {
    let categoryName = categories.shift();
    let category = arr.find(d => d.name === categoryName && d.parentId === parentId);
    if(!category) {
      category = {
        id: cuid(),
        parentId: parentId,
        name: categoryName,
        path: (parentPath.length > 0 ? parentPath.concat(` / ${categoryName}`) : categoryName)
      };
      arr.push(category);
    }
    if(categories.length) {
      createCategoryNode(categories, category.path, category.id, arr);
    }
  }
};

const createCategoryArr = (categories) => {
  let arr = [];
  categories.forEach(c => {
    createCategoryNode(c.split(' / '), '', null, arr);
  });
  return arr;
};

const Filter = (props) => {
  let wrapperClass = 'filter';
  let buttonClass = `${wrapperClass}__button`;
  const contentsClass = `${wrapperClass}__list`;
  if(props.show) {
    wrapperClass += ' show';
    buttonClass += ' active';
  }

  return (
    <div className={wrapperClass}>
      <button className={buttonClass} onClick={props.onButtonClick}><i className="fa fa-filter" aria-hidden="true"/> Filter</button>
      <div className="filter__content">
        <h4 className="filter__header">Categories</h4>
        <ul className={contentsClass + '-categories'}>
          <CategoryBrowser categories={createCategoryArr(props.categories)} onClick={props.onCategoryClick}/>
        </ul>
        <h4 className="filter__header">Tags</h4>
        <ul className={contentsClass + '-tags'}>
          {props.tags.map((tag, index) => <FilterTag key={index} tag={tag} active={props.filters.tags.find(t => t.tag === tag).show} onClick={props.onTagClick}/>)}
        </ul>
      </div>
    </div>
  );
};

Filter.propTypes = {
  show: React.PropTypes.bool.isRequired,
  tags: React.PropTypes.array.isRequired,
  filters: React.PropTypes.object.isRequired,
  categories: React.PropTypes.array.isRequired,
  onButtonClick: React.PropTypes.func.isRequired,
  onTagClick: React.PropTypes.func.isRequired,
  onCategoryClick: React.PropTypes.func.isRequired,
};

export default Filter;