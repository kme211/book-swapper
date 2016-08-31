import React, { PropTypes } from 'react';
import Book from './Book';
import truncateText from '../../utils/truncateText';

class BookList extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const books = this.props.books.map((book, index) => {
      const {title, author, isbn, desc, availability, link} = book;
      return (
        <Book
        key={index}
        author={author}
        title={title}
        isbn={isbn}
        desc={truncateText(desc, 215)}
        availability={availability}
        link={link} />
      );
    });

    return (
      <div className="book-list">
        {books}
      </div>
    );
  }
}

BookList.propTypes = {
  books: React.PropTypes.array.isRequired
};

export default BookList;
