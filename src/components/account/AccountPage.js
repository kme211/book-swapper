import React, { PropTypes } from 'react';
import {connect} from 'react-redux';

class AccountPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div className="container">
        <h2 className="sub-header">Account</h2>
        <div className="account-info">
          <div className="account-info__item">
            <span className="account-info__label">Name:</span> {this.props.user.firstName + ' ' + this.props.user.lastName}
          </div>
          <div className="account-info__item">
            <span className="account-info__label">Email:</span> {this.props.user.email}
          </div>
          <div className="account-info__item">
            <span className="account-info__label">My groups: </span>
            <ul className="account-info__groups">{this.props.groups.map((group, index) => <li className="account-info__group" key={index}>{group.name}</li>)}</ul>
          </div>
          <div className="account-info__item">
            <span className="account-info__label">My books: </span>
            <ul className="account-info__books">
              {this.props.user.books && this.props.user.books.map((book, index) => <li className="account-info__book" key={index}>{book.title}</li>)}
            </ul>
          </div>
      </div>
      </div>
    );
  }
}

AccountPage.propTypes = {
  user: React.PropTypes.object.isRequired,
  groups: React.PropTypes.array.isRequired
};

AccountPage.defaultProps = {
  user: {},
  groups: []
};

function mapStateToProps(state) {
  return {
    user: state.user,
    groups: state.groups
  };
}

export default connect(mapStateToProps)(AccountPage);
