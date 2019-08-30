import { connect } from 'react-redux';
import { fetchDataAction } from '../../redux/action';
import ChatApp from './ChatApp';

function mapStateToProps(state) {
  return {
    loadData: state.loadData,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    fetch: () => dispatch(fetchDataAction()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatApp)
