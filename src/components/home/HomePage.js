import React, { PropTypes } from 'react';
import BookList from 'components/books/BookList';
import Filter from 'components/books/Filter';

class HomePage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {


    return (
      <div>
        <section>
          <BookList/>
        </section>

      </div>
    );
  }
}

HomePage.propTypes = {
};

export default HomePage;
