import React, { PropTypes } from 'react';
import BookList from '../books/BookList';
import mockBookData from '../books/mockBookData';

class HomePage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div>
        <h2>Home Page</h2>
        <BookList books={mockBookData} />
      </div>
    );
  }
}

HomePage.propTypes = {
};

export default HomePage;
