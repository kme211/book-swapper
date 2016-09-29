import React, { PropTypes } from 'react';
import CategoryItem from './CategoryItem';

class CategoryBrowser extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      data: []
    };

    this.categoryClickHandler = this.categoryClickHandler.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.categories.length > this.props.categories.length) {
      this.setState({
        data: nextProps.categories.map(c => Object.assign({}, c, {expanded: false, selected: true}))
      });
    }
  }

  categoryClickHandler(o) {
    const data = this.state.data;
    const index = this.state.data.findIndex(c => c.id === o.id);
    let updatedData = [
      ...data.slice(0, index),
      Object.assign({}, data[index], o),
      ...data.slice(index + 1)
    ];

    const updateChildren = (data, parentId, selected) => {
      data.filter(c => c.parentId === parentId).map(c => {
        Object.assign(c, {selected: selected}); // mutates the object
        updateChildren(data, c.id, selected);
      });
    };

    const updateParents = (data, childId, selected) => {
      // TODO
    };

    if(o.hasOwnProperty('selected')) {
      updateChildren(updatedData, o.id, o.selected);
    }

    if(index > -1) {
      this.setState({
        data: updatedData
      }, () => this.props.onClick(this.state.data));
    }
  }

  render() {
    return (
      <ul className="categories show">
        {this.state.data.filter(c => c.parentId === null).map(c => {
          return (<CategoryItem
                   key={c.id}
                   {...c}
                   data={this.state.data}
                   updateCategoryStatus={this.categoryClickHandler} />);
        })}

      </ul>
    );
  }
}

CategoryBrowser.propTypes = {
  categories: React.PropTypes.array.isRequired,
  onClick: React.PropTypes.func.isRequired
};

export default CategoryBrowser;
