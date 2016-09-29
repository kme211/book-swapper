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
          <p className="account-info__item"><span className="account-info__label">Name:</span> {this.props.user.firstName + ' ' + this.props.user.lastName}</p>
          <p className="account-info__item"><span className="account-info__label">Email:</span> {this.props.user.email}</p>
        </div>
      </div>
    );
  }
}

AccountPage.propTypes = {
  user: React.PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

export default connect(mapStateToProps)(AccountPage);
