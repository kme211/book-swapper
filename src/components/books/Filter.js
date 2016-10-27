import React, { PropTypes } from 'react';
import FilterTag from './FilterTag';
import escape from 'lodash/escape';
import cuid from 'cuid';
import CategoryBrowser from './CategoryBrowser';
import styled from 'styled-components';
import Collapse from '../organisms/Collapse';
import Heading from '../atoms/Heading';
import Icon from '../atoms/Icon';

const Wrapper = styled.div`
  width: 100%;
  margin: 0 0 1rem 0;
`;

const CategoriesWrapper = styled.div`
  list-style-type: none;
  text-align: center;
  padding: 0 0 1em 0;
  margin: 0 1em 0 0;
`;

const TagsWrapper = styled.div`
  list-style-type: none;
  text-align: center;
  padding: 0 0 1em 0;
  margin: 0 1em;
`;

const ButtonWrapper = styled.button`
  height: 2em;
  margin: 0 0 1em 0;
  width: 100%;
  background-color: ${props => props.active ? '#ccc' : 'white'};
  border: 1px solid #ccc;
  font-family: inherit;
  font-size: 1em;
  transition: background-color 0.4s;
  cursor: pointer;
`;

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
    <Wrapper>
      <ButtonWrapper active={props.show} onClick={props.onButtonClick}><Icon icon="filter"/> {props.show ? 'Hide filters' : 'Show filters'}</ButtonWrapper>
      <Collapse isOpen={props.show}>
        <div>
          <Heading level={4}>Categories</Heading>
          <CategoriesWrapper>
            <CategoryBrowser categories={createCategoryArr(props.categories)} onClick={props.onCategoryClick}/>
          </CategoriesWrapper>
          <Heading level={4}>Tags</Heading>
          <TagsWrapper>
            {props.tags.map((tag, index) => <FilterTag key={index} tag={tag} active={props.filters.tags.find(t => t.tag === tag).show} onClick={props.onTagClick}/>)}
          </TagsWrapper>
        </div>
      </Collapse>
    </Wrapper>
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
