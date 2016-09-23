import React, { PropTypes } from 'react';
import ExpandCollapseButton from './ExpandCollapseButton';

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
    let childrenSelected;
    let childData = data.filter(c => c.parentId === id);
    let listClass;

    if(childData.length) {
      listClass = "categories";
      if(expanded) {
        listClass += " show";
      }
    }

    if(selected && (!childData.length || childData.every(c => c.selected))) {
      childrenSelected = 'all';
    } else if(childData.some(c => c.selected)) {
      childrenSelected = 'some';
    } else {
      childrenSelected = 'none';
    }

    let wrapperClass = "category__name";
    let iconClass = "fa fa-";
    if(childrenSelected === 'all') {
      iconClass += 'check-circle';
    } else if(childrenSelected === 'some') {
      iconClass += 'check-circle-o';
    } else {
      iconClass += 'circle-o';
    }
    if(childrenSelected) {
      wrapperClass += " selected-" + childrenSelected;
    }

    let childElements = null;
    if(childData.length) {
      childElements = (
        <ul className={listClass}>
          {childData.map(c => {
            let props = Object.assign({}, c, {data: this.props.data, updateCategoryStatus: this.props.updateCategoryStatus});
            return <CategoryItem key={c.id} {...props}/>;
          })}
        </ul>
      );
    }


    return (
      <li className="category__item">
        <div className="category__head">
          <span className={wrapperClass} onClick={this.onNameClick}>{name}<i className={iconClass} aria-hidden="true"/></span>
          {childElements && <ExpandCollapseButton icon={expanded ? "up" : "down"} onClick={this.onToggleClick} />}
        </div>
        {childElements}
      </li>
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
