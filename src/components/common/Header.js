import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';

const Header = () => {
  return (
    <header className="main-header">
      <div className="main-header__inner">
        <h1 className="main-header__title">Book Swapper</h1>
        <ul className="main-header__menu" role="navigation">
          <li className="main-header__menu-item-outer">
            <IndexLink to="/" activeClassName="active" className="main-header__menu-item">Home</IndexLink>
          </li>
          <li className="main-header__menu-item-outer">
            <Link to="account" activeClassName="active" className="main-header__menu-item">Account</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
