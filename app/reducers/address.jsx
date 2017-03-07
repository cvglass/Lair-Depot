import {GET_USER_ADDRESS, UPDATE_USER_ADDRESS} from '../constants';

const initialState = { address: {}}

const address = (state = initialState, action) => {

  const newState = Object.assign({}, state);

  switch (action.type){
    case (GET_USER_ADDRESS):
      newState.address = action.address;
      return newState;

    case (UPDATE_USER_ADDRESS):
      newState.address = action.address;
      return newState;

    default:
      return state;
  }
}

export default address;
