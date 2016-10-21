import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as messageActions from '../../actions/messageActions';
import Loader from '../common/Loader';
import ConversationRow from './ConversationRow';
import timeSince from '../../utils/timeSince';

export class MessagePage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.renderComponent = this.renderComponent.bind(this);
    this.renderLoader = this.renderLoader.bind(this);
  }

  componentWillMount() {

  }

  render() {
    return (
      <ul>
        this.props.messages.map(msg => <li>{msg.body}</li>)
      </ul>
    )
  }

}

MessagePage.propTypes = {

};

MessagePage.contextTypes = {
  router: PropTypes.object
};

function mapStateToProps(state) {
  let isFetching = true;
  return {
    isFetching:
    messages:
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(messageActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MessagePage);
