import React from 'react';
import expect from 'expect';
import {mount, shallow} from 'enzyme';
import Filter from './Filter';
import FilterTag from './FilterTag';

describe('<Filter/>', () => {
  it('displays a <FilterTag/> for each tag passed in props', () => {
    const props = {
      show: true,
      tags: ['Fiction', 'Literary', 'Non-fiction'],
      filters: {
        'Fiction': 'show',
        'Literary': 'show',
        'Non-fiction': 'hide'
      },
      onButtonClick() {},
      onTagClick() {}
    };

    const wrapper = mount(<Filter {...props}/>);
    expect(wrapper.find(FilterTag).length).toBe(3);
  });

  it('has the "show" class when "show" is true in props', () => {
    const props = {
      show: true,
      tags: ['Fiction', 'Literary', 'Non-fiction'],
      filters: {
        'Fiction': 'show',
        'Literary': 'show',
        'Non-fiction': 'show'
      },
      onButtonClick() {},
      onTagClick() {}
    };

    const wrapper = shallow(<Filter {...props}/>);
    expect(wrapper.find('.filter').hasClass('show')).toBe(true);
  });

  it('does not have the "show" class when "show" is false in props', () => {
    const props = {
      show: false,
      tags: ['Fiction', 'Literary', 'Non-fiction'],
      filters: {
        'Fiction': 'show',
        'Literary': 'show',
        'Non-fiction': 'show'
      },
      onButtonClick() {},
      onTagClick() {}
    };

    const wrapper = shallow(<Filter {...props}/>);
    expect(wrapper.find('.filter').hasClass('show')).toBe(false);
  });

  it('should add "active" class only to the FilterTags that are set to "show" in filters', () => {
    const props = {
      show: false,
      tags: ['Fiction', 'Literary', 'Non-fiction'],
      filters: {
        'Fiction': 'show',
        'Literary': 'show',
        'Non-fiction': 'hide'
      },
      onButtonClick() {},
      onTagClick() {}
    };

    const wrapper = mount(<Filter {...props}/>);
    expect(wrapper.find(FilterTag).at(0).find('.filter__tag').hasClass('active')).toBe(true);
    expect(wrapper.find(FilterTag).at(2).find('.filter__tag').hasClass('active')).toBe(false);
  });
});
