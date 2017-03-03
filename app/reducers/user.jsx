import {GET_USERINFO} from '../constants.jsx';

const initialState = {info: {}}

const user = (state = initialState, action) => {

  const newState = Object.assign({}, state);

  switch (action.type){
    case (GET_USERINFO):
      newState.info = action.info;
      return newState;

    default:
      return state;
  }
}

export default user;
