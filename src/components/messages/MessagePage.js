import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as conversationActions from '../../actions/conversationActions';
import Loader from '../common/Loader';
import ConversationRow from './ConversationRow';
import timeSince from '../../utils/timeSince';
import {makeGetMessages} from '../../selectors/selectors';
import Message from './Message';
import Input from 'components/atoms/Input';

export class MessagePage extends React.Component {
  constructor(props, context) {
    super(props, context);

    //this.renderComponent = this.renderComponent.bind(this);
    //this.renderLoader = this.renderLoader.bind(this);
  }

  componentWillMount() {
    this.props.actions.loadConversation(this.props.params.id);
  }

  render() {
    return (
      <div>
        {this.props.messages.map((msg, i) => {
          if(typeof msg === 'string') return;
          const props = Object.assign({}, msg, {timestamp: timeSince(msg.timestamp)});
          return (
            <Message key={i} {...props} />
          );
        })}

        <Input type="textarea"/>
      </div>
    );
  }

}

MessagePage.propTypes = {
  actions: PropTypes.object.isRequired,
  messages: PropTypes.array.isRequired
};

MessagePage.defaultProps = {
  messages: []
};

MessagePage.contextTypes = {
  router: PropTypes.object
};

const makeMapStateToProps = () => {
  const getMessages = makeGetMessages();
  const mapStateToProps = (state, props) => {
    return {
      messages: getMessages(state, props)
    };
  };
  return mapStateToProps;
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(conversationActions, dispatch)
  };
}

export default connect(makeMapStateToProps, mapDispatchToProps)(MessagePage);
