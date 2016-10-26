import React, { PropTypes } from 'react';
import {connect} from 'react-redux';
import Heading from 'components/atoms/Heading';
import styled from 'styled-components';

const Label = styled.span`
  font-weight: bolder;
`;

const Item = styled.div`
  margin-bottom: 0.5rem;
`;

const List = styled.ul`
  margin: 0 0 0 2rem;
  padding: 0;
  list-style-type: none;
`;

class AccountPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div>
        <Heading level={2}>Account</Heading>
        <div>

          <Item>
            <Label>Name: </Label>
            {this.props.user.firstName + ' ' + this.props.user.lastName}
          </Item>

          <Item>
            <Label>Email: </Label>
            {this.props.user.email}
          </Item>
          <Item>

            <Label>My groups: </Label>
            <List>
              {this.props.groups.map((group, index) => <li className="account-info__group" key={index}>{group.name}</li>)}
            </List>
          </Item>

          <Item>
            <Label>My books: </Label>
            <List>
              {this.props.user.books && this.props.user.books.map((book, index) => <li className="account-info__book" key={index}>{book.title}</li>)}
            </List>
          </Item>

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
