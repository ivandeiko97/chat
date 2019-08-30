import { connect } from 'react-redux';
import Message from './Message';
import { addFavoriteAction } from '../../redux/action';

function mapStateToProps(state, ownProps) {
  const {
    avatar, 
    userName, 
    messageText, 
    created_at, 
    messageId,
    favorite
  } = ownProps;
  
  return {
    avatar, 
    userName, 
    messageText, 
    created_at,
    messageId,
    favorite,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addFavorite: id => dispatch(addFavoriteAction(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Message);
