import {retrieveUserInfo} from '../action-creators/user.jsx';
import {connect} from 'react-redux';
import User from '../components/User.jsx';

const mapStateToProps = (state) => {
  return {
    info: state.user.info,
    address: state.user.address,
    auth: state.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    findUserInfo: function(userInfo) {
      dispatch(retrieveUserInfo(userInfo))
    }
  }
}

const UserContainer = connect(mapStateToProps, mapDispatchToProps)(User);

export default UserContainer;
