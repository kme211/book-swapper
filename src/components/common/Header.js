import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';

const Header = () => {
  return (
    <header>
      <h1>Book Swapper</h1>
      <nav role="navigation">
        <IndexLink to="/" activeClassName="active">Home</IndexLink>
        <Link to="account" activeClassName="active">Account</Link>
      </nav>
    </header>
  );
};

export default Header;
