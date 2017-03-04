import {GET_USERINFO, GET_USER_ADDRESS, UPDATE_USERINFO, UPDATE_USER_ADDRESS} from '../constants.jsx';
import axios from 'axios';

export const updateUserInfo = (userInfo) => {
  return {
    type: UPDATE_USERINFO,
    info: userInfo
  }
}

export const getUserInfo = (userInfo) => {
  return {
    type: GET_USERINFO,
    info: userInfo
  }
}

export const getUserAddress = (addressInfo) => {
  return {
    type: GET_USER_ADDRESS,
    address: addressInfo
  }
}

export const updateUserAddress = (addressInfo) => {
  return {
    type: UPDATE_USER_ADDRESS,
    address: addressInfo
  }
}

export const retrieveUserInfo = (userID) => {
  return (dispatch) => {
    axios.get(`/api/users/${userID}`)
    .then( info => {
      dispatch(getUserInfo(info.data))
      return info.address_id
    })
    .then(addressID => {
      axios.get(`/api/addresses/${addressID}`)
      .then(addressInfo => dispatch(getUserAddress(addressInfo.data.billingInfo)))
    })
    .catch(err => console.log(err));
  }
}

//need PUT route in user server routes
export const changeUserInfo = (newInfo) => {
  return dispatch => {
    axios.put();
  }
}

//need PUT route in address server routes
export const changeAddressInfo = (newInfo) => {
  return dispatch => {
    axios.put();
  }
}
