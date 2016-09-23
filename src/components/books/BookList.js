import React, { PropTypes } from 'react';
import Book from './Book';
import Filter from './Filter';
import truncateText from '../../utils/truncateText';
import getUniqueTags from '../../utils/getUniqueTags';
import flatten from 'lodash/flatten';
import uniq from 'lodash/uniq';
import flatMap from 'lodash/flatMap';
import escape from 'lodash/escape';

class BookList extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.allCategories = uniq(flatMap(this.props.books, book => book.categories));
    this.allTags = flatMap(this.props.books, book => book.tags);

    this.state = {
      showFilters: false,
      tags: this.allTags.map(tag => Object.assign({}, {tag: tag, show: true})),
      categories: this.allCategories.map(category => Object.assign({}, {path: category, show: true}))
    };

    this.onFilterButtonClick = this.onFilterButtonClick.bind(this);
    this.onFilterTagClick = this.onFilterTagClick.bind(this);
    this.onFilterCategoryClick = this.onFilterCategoryClick.bind(this);
  }

  onFilterCategoryClick(newData) {
    const categories = this.state.categories;
    let updatedCategories = [];
    for(let i = 0; i < categories.length; i++) {
      const category = newData.find(c => c.path === categories[i].path);
      updatedCategories.push(Object.assign({}, categories[i], {show: category.selected}));
    }
    this.setState({
      categories: updatedCategories
    });
  }

  onFilterButtonClick(e) {
    this.setState({
      showFilters: !this.state.showFilters
    });
  }

  onFilterTagClick(e) {
    const tags = this.state.tags;
    const index = tags.findIndex(t => t.tag === e.target.innerHTML);
    const tag = tags[index];
    this.setState({
      tags: [
        ...tags.slice(0, index),
        Object.assign({}, tag, {show: !tag.show}),
        ...tags.slice(index + 1)
      ]
    });
  }

  showBook(bookTags, bookCategories) {
    let {categories, tags} = this.state;
    for(let i = 0; i < bookTags.length; i++) {
      let tag = tags.find(c => c.tag === bookTags[i]);
      if(tag.show) return true;
    }

    for(let i = 0; i < bookCategories.length; i++) {
      let category = categories.find(c => c.path === bookCategories[i]);
      if(category.show) return true;
    }

    return false;
  }

  render() {
    const books = this.props.books.map((book, index) => {
      const {title, author, industryIdentifiers, tags, categories, desc, availability, link} = book;
      //const tags = getUniqueTags(categories);
      if(!this.showBook(tags, categories)) {
        return null;
      }
      return (
        <Book
        key={index}
        author={author}
        title={title}
        tags={tags}
        industryIdentifiers={industryIdentifiers}
        desc={truncateText(desc, 215)}
        availability={availability}
        link={link} />
      );
    });

    return (
      <div>
        <div className="sub-header">
          <div className="sub-header__inner">
            <h2>All books</h2>
          </div>
        </div>
        <Filter
          show={this.state.showFilters}
          tags={this.allTags}
          categories={this.allCategories}
          filters={Object.assign({}, {tags: this.state.tags, categories: this.state.categories})}
          onButtonClick={this.onFilterButtonClick}
          onTagClick={this.onFilterTagClick}
          onCategoryClick={this.onFilterCategoryClick}/>
        <div className="book-list">
          {books}
        </div>
      </div>

    );
  }
}

BookList.propTypes = {
  books: React.PropTypes.array.isRequired
};

export default BookList;
