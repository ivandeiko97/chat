import { connect } from 'react-redux';
import CurrentUserMessage from './CurrentUserMessage';
import { changeEditModeAction, editMessageAction, deleteMessageAction } from '../../redux/action';

function mapStateToProps(state, ownProps) {
  const {
    avatar, 
    userName, 
    messageText, 
    created_at, 
    messageId,
    edit,
  } = ownProps;
  
  return {
    avatar, 
    userName, 
    messageText,
    created_at, 
    messageId,
    edit,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    editMessage: (id, value) => dispatch(editMessageAction(id, value)),
    changeMode: id => dispatch(changeEditModeAction(id)),
    deleteMessage: id => dispatch(deleteMessageAction(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrentUserMessage);