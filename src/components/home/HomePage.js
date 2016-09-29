import React, { PropTypes } from 'react';
import BookList from '../books/BookList';
import Filter from '../books/Filter';

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
