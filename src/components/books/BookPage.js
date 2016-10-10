import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {getGroupsBooks, getGroupsUsersSelector} from '../../selectors/selectors';
import coverUrl from '../../utils/bookCoverUrl';
import Book from './Book';
import pick from 'lodash/pick';

export class BookPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div className="container">
      <h2 className="sub-header">Book detail</h2>
        <Book {...this.props.book} showDetails isFetching={this.props.isFetching} />
      </div>
    );
  }
}

BookPage.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  book: PropTypes.object.isRequired
};

BookPage.contextTypes = {
  router: PropTypes.object
};

function getBookById(books, id) {
  return Object.assign({}, books.find(b => b.id === id));
}

function mapStateToProps(state, props) {
  const users = getGroupsUsersSelector(state);
  const bookId = props.params.id;
  let availability = [];
  let isFetching = true;
  let book = {};

  if(bookId && state.groups.length) {
    book = getBookById(getGroupsBooks(state), bookId);
    book.availability = book.availability.map(a => {
      return Object.assign({}, a, {owner: pick(users.find(u => u.id === a.owner), ['id', 'firstName'])});
    });
    isFetching = false;
  }

  return {
    isFetching: isFetching,
    book: book
  };
}

export default connect(mapStateToProps)(BookPage);
