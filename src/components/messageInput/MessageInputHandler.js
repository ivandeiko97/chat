import { connect } from 'react-redux';
import MessageInput from './MessageInput';
import { addMessageAction } from '../../redux/action';

function mapStateToProps(state) {
  const {messages, currentUser} = state;
  return {
    currentUser: currentUser.name,
    id: messages[messages.length - 1].messageId + 1,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addMessage: (message) => dispatch(addMessageAction(message)), 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageInput);
