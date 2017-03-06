import {connect} from 'react-redux';
import Users from '../components/Users';
import {makeAdmin} from '../action-creators/users';

const mapStateToProps = state => {
  return {
    users: state.users.list
  }
}

const mapDispatchToProps = dispatch => {
  return {
    makeAdmin: userId => {
      dispatch(makeAdmin(userId))
    }
  }
}

const UsersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Users);

export default UsersContainer;
