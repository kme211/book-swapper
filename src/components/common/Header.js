import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';

const Header = () => {
  return (
    <div>
      <h1>Book Swapper</h1>
      <nav>
        <IndexLink to="/" activeClassName="active">Home</IndexLink>
        <Link to="account" activeClassName="active">Account</Link>
      </nav>
    </div>
  );
}

export default Header;
