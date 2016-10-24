import React, { PropTypes } from 'react';
import Loader from 'components/common/Loader';

const User = (props) => {
  const {id, firstName, lastName, books, isFetching} = props;
  let component;
  if(!isFetching) {
    component = (
      <div>
        <h3>{firstName + ' ' + lastName}</h3>
        <h3>{firstName}&apos;s books</h3>
        <ul>
          {books.map((b, i) => <li key={i}>{b.title} by {b.author} ({b.availability.find(a => a.owner === id).status})</li>)}
        </ul>
      </div>
    );
  } else {
    component = (
      <Loader message="Loading user"/>
    );
  }

  return (
    <div>{component}</div>
  );
};

User.propTypes = {
  id: React.PropTypes.string.isRequired,
  firstName: React.PropTypes.string.isRequired,
  lastName: React.PropTypes.string.isRequired,
  books: React.PropTypes.array.isRequired,
  isFetching: React.PropTypes.bool
};

export default User;
