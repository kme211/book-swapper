import React, { PropTypes } from 'react';
import ExpandCollapseButton from './ExpandCollapseButton';
import styled from 'styled-components';
import { colors, fonts } from '../globals';
import Collapse from '../organisms/Collapse';
import Icon from '../atoms/Icon';

const List = styled.ul`
  padding: 0;
`;

const Wrapper = styled.li`
  list-style-type: none;
  color: ${colors.grayscale[0]};
  font-family: ${fonts.primary};
  cursor: pointer;
  margin-bottom: 3px;
  margin-left: 1em;
`;

const Head = styled.div`
  background: #fafafa;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: .25em;
`;

class CategoryItem extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.onNameClick = this.onNameClick.bind(this);
    this.onToggleClick = this.onToggleClick.bind(this);
  }

  onNameClick() {
    this.props.updateCategoryStatus({id: this.props.id, selected: !this.props.selected});
  }

  onToggleClick() {
    this.props.updateCategoryStatus({id: this.props.id, expanded: !this.props.expanded});
  }

  render() {

    const {data, id, name} = this.props;
    const myData = data.find(c => c.id === id);
    const {expanded, selected, parentId} = myData;
    let childData = data.filter(c => c.parentId === id);
    let iconName = 'checkbox-checked';
    let iconColor;

    if(selected && (!childData.length || childData.every(c => c.selected))) {
      iconColor = colors.green;
    } else if(childData.some(c => c.selected)) {
      iconColor = '#00ADB5';
    } else {
      iconName = 'checkbox-unchecked';
      iconColor = '#718CA1';
    }

    let childElements = null;
    if(childData.length) {
      childElements = (
        <Collapse isOpen={expanded}>
          <List>
            {childData.map(c => {
              let props = Object.assign({}, c, {data: this.props.data, updateCategoryStatus: this.props.updateCategoryStatus});
              return <CategoryItem key={c.id} {...props}/>;
            })}
          </List>
        </Collapse>
      );
    }


    return (
      <Wrapper>
        <Head>
          <span onClick={this.onNameClick}>
            <Icon icon={iconName} color={iconColor}/>
             {name}
            </span>
          {childElements && <ExpandCollapseButton icon={expanded ? "angle-up" : "angle-down"} onClick={this.onToggleClick} />}
        </Head>
        {childElements}
      </Wrapper>
    );
  }
}

CategoryItem.propTypes = {
  id: React.PropTypes.string.isRequired,
  data: React.PropTypes.array.isRequired,
  name: React.PropTypes.string.isRequired,
  expanded: React.PropTypes.bool.isRequired,
  selected: React.PropTypes.bool.isRequired,
  updateCategoryStatus: React.PropTypes.func.isRequired
};

export default CategoryItem;
