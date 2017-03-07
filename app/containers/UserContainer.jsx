import {retrieveUserAddress} from '../action-creators/address';
import {connect} from 'react-redux';
import User from '../components/User';

const mapStateToProps = (state) => {
  return {
    address: state.address.address,
    auth: state.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    findUserInfo: function(userInfo) {
      dispatch(retrieveUserAddress(userInfo))
    }
  }
}

const UserContainer = connect(mapStateToProps, mapDispatchToProps)(User);

export default UserContainer;
