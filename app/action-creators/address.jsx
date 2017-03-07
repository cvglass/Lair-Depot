import {GET_USER_ADDRESS, UPDATE_USER_ADDRESS} from '../constants';
import axios from 'axios';

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

export const retrieveUserAddress = (userID) => {
  return (dispatch) => {
    axios.get(`/api/users/${userID}`)
    .then(info => {
      let addressID = info.data.address_id;
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
