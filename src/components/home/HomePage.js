import React, { PropTypes } from 'react';
import BookList from '../books/BookList';
import Filter from '../books/Filter';
import mockBookData from '../../api/mockBookData';

class HomePage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {


    return (
      <div>
        <section>
          <BookList books={mockBookData} />
        </section>

      </div>
    );
  }
}

HomePage.propTypes = {
};

export default HomePage;
