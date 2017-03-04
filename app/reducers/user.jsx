import {GET_USERINFO, GET_USER_ADDRESS, UPDATE_USERINFO, UPDATE_USER_ADDRESS} from '../constants.jsx';

const initialState = {info: {}, address: {}}

const user = (state = initialState, action) => {

  const newState = Object.assign({}, state);

  switch (action.type){
    case (GET_USERINFO):
      newState.info = action.info;
      return newState;

    case (GET_USER_ADDRESS):
      newState.address = action.address;
      return newState;

    case (UPDATE_USER_ADDRESS):
      newState.address = action.address;
      return newState;

    case (UPDATE_USERINFO):
      newState.info = action.info;
      return newState;

    default:
      return state;
  }
}

export default user;
