import { connect } from 'react-redux';
import ChatList from './ChatList'

function mapStateToProps(state) {
  const {
    users,
    messages,
  } = state;

  return {
    users,
    messages,
  }
};

function mapDispatchToProps() {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatList);