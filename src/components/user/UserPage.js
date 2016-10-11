import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {getGroupsBooks, getGroupsUsersSelector} from '../../selectors/selectors';
import User from './User';

export class UserPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div className="container">
      <h2 className="sub-header">User profile</h2>
        <User {...this.props.user} isFetching={this.props.isFetching} />
      </div>
    );
  }
}

UserPage.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired
};

UserPage.contextTypes = {
  router: PropTypes.object
};

function getUserById(users, id) {
  return Object.assign({}, users.find(u => u.id === id));
}

function mapStateToProps(state, props) {
  const users = getGroupsUsersSelector(state);
  const userId = props.params.id;
  let isFetching = true;
  let user = {id: '', firstName: '', lastName: '', books: [], email: ''};

  if(userId && state.groups.length) {
    user = getUserById(users, userId);
    isFetching = false;
  }

  return {
    isFetching: isFetching,
    user: user
  };
}

export default connect(mapStateToProps)(UserPage);
