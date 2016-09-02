import React, { PropTypes } from 'react';
import BookList from '../books/BookList';
import mockBookData from '../../api/mockBookData';

class HomePage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div>
        <div className="sub-header">
          <div className="sub-header__inner">
            <h2>Home Page</h2>
          </div>
        </div>

        <section>
          <div className="section-header">
            <h2>Explore</h2>
            <p>See what books your neighbors recommend.</p>
          </div>
          <BookList books={mockBookData} />
        </section>

      </div>
    );
  }
}

HomePage.propTypes = {
};

export default HomePage;
