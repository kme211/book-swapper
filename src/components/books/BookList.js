import React, { PropTypes } from 'react';
import Book from './Book';
import Filter from './Filter';
import truncateText from '../../utils/truncateText';
import getUniqueTags from '../../utils/getUniqueTags';
import flatten from 'lodash/flatten';
import union from 'lodash/union';
import escape from 'lodash/escape';

class BookList extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.allTags = getUniqueTags(flatten(union(this.props.books.map(book => book.categories))));

    const filters = {};
    for(let i = 0; i < this.allTags.length; i++) {
      filters[escape(this.allTags[i])] = 'show';
    }

    this.state = {
      showFilters: false,
      filters: filters
    };

    this.onFilterButtonClick = this.onFilterButtonClick.bind(this);
    this.onFilterTagClick = this.onFilterTagClick.bind(this);
  }

  onFilterButtonClick(e) {
    this.setState({
      showFilters: !this.state.showFilters
    });
  }

  onFilterTagClick(e) {
    let currentValue = this.state.filters[e.target.innerHTML];
    let tag = {};
    tag[e.target.innerHTML] = (currentValue === 'show' ? 'hide' : 'show');
    this.setState({
      filters: Object.assign({}, this.state.filters, tag)
    });
  }

  showBook(tags, filters) {
    for(let i = 0; i < tags.length; i++) {
      if(filters[escape(tags[i])] === 'show') return true;
    }
    return false;
  }

  render() {
    const books = this.props.books.map((book, index) => {
      const {title, author, industryIdentifiers, categories, desc, availability, link} = book;
      const tags = getUniqueTags(categories);
      if(!this.showBook(tags, this.state.filters)) {
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
        <Filter show={this.state.showFilters} tags={this.allTags} filters={this.state.filters} onButtonClick={this.onFilterButtonClick} onTagClick={this.onFilterTagClick}/>
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
