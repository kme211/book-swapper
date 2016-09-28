import React from 'react';
import expect from 'expect';
import {mount, shallow} from 'enzyme';
import Filter from './Filter';
import FilterTag from './FilterTag';

describe('<Filter/>', () => {
  it('displays a <FilterTag/> for each tag passed in props', () => {
    const props = {
      show: true,
      tags: ['mars', 'androids', 'desert'],
      categories: ['Fiction / Science Fiction / General', 'Fiction / Action & Adventure'],
      filters: {
        tags: [{tag: 'mars', show: true}, {tag: 'androids', show: true}, {tag: 'desert', show: true}],
        categories:  [{path: 'Fiction / Science Fiction / General', show: true}, {path: 'Fiction / Action & Adventure', show: true}]
      },
      onButtonClick() {},
      onTagClick() {},
      onCategoryClick() {}
    };

    const wrapper = mount(<Filter {...props}/>);
    expect(wrapper.find(FilterTag).length).toBe(3);
  });

  it('has the "show" class when "show" is true in props', () => {
    const props = {
      show: true,
      tags: ['mars', 'androids'],
      categories: ['Fiction / Science Fiction / General', 'Fiction / Action & Adventure'],
      filters: {
        tags: [{tag: 'mars', show: true}, {tag: 'androids', show: true}],
        categories:  [{path: 'Fiction / Science Fiction / General', show: true}, {path: 'Fiction / Action & Adventure', show: true}]
      },
      onButtonClick() {},
      onTagClick() {},
      onCategoryClick() {}
    };

    const wrapper = shallow(<Filter {...props}/>);
    expect(wrapper.find('.filter').hasClass('show')).toBe(true);
  });

  it('does not have the "show" class when "show" is false in props', () => {
    const props = {
      show: false,
      tags: ['mars', 'androids'],
      categories: ['Fiction / Science Fiction / General', 'Fiction / Action & Adventure'],
      filters: {
        tags: [{tag: 'mars', show: true}, {tag: 'androids', show: true}],
        categories:  [{path: 'Fiction / Science Fiction / General', show: true}, {path: 'Fiction / Action & Adventure', show: true}]
      },
      onButtonClick() {},
      onTagClick() {},
      onCategoryClick() {}
    };

    const wrapper = shallow(<Filter {...props}/>);
    expect(wrapper.find('.filter').hasClass('show')).toBe(false);
  });

  it('should add "active" class only to the FilterTags that are set to "show" in filters', () => {
    const props = {
      show: false,
      tags: ['mars', 'desert', 'androids'],
      categories: ['Fiction / Science Fiction / General', 'Fiction / Action & Adventure'],
      filters: {
        tags: [{tag: 'mars', show: true}, {tag: 'desert', show: true}, {tag: 'androids', show: false}],
        categories:  [{path: 'Fiction / Science Fiction / General', show: true}, {path: 'Fiction / Action & Adventure', show: true}]
      },
      onButtonClick() {},
      onTagClick() {},
      onCategoryClick() {}
    };

    const wrapper = mount(<Filter {...props}/>);
    expect(wrapper.find(FilterTag).at(0).find('.filter__tag').hasClass('active')).toBe(true);
    expect(wrapper.find(FilterTag).at(2).find('.filter__tag').hasClass('active')).toBe(false);
  });
});
