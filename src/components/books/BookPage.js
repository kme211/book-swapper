import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {getGroupsBooks} from '../../selectors/selectors';
import coverUrl from '../../utils/bookCoverUrl';
import Book from './Book';

export class BookPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div className="container">
      <h2 className="sub-header">Book detail</h2>
        <Book {...this.props.book} showDetails />
      </div>
    );
  }
}

BookPage.propTypes = {
  book: PropTypes.object.isRequired
};

BookPage.contextTypes = {
  router: PropTypes.object
};

function getBookById(books, id) {
  return books.find(b => b.id === id);
}

function mapStateToProps(state, props) {
  const bookId = props.params.id;
  let book = {id: '', title: '', author: '', categories: [], tags: [], industryIdentifiers: [], desc: '', availability: [], link: ''};
  // TODO: Fix BookPage refresh
  if(bookId && state.groups.length) {
    book = getBookById(getGroupsBooks(state), bookId);
  }

  return {
    book
  };
}

export default connect(mapStateToProps)(BookPage);
