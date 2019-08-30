import { connect } from 'react-redux';
import Header from './Header';

function mapStateToProps(state) {
  const {users, messages} = state;
  return {
    countUsers: users.length,
    countMessages: messages.length,
    lastMessageTime: messages[messages.length - 1].created_at,
  }
}

function mapDispatchToProps(dispatch) {
  return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
