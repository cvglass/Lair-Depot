import { GET_ORDERS, GET_CURRENT_USER_ORDERS } from '../constants';

const initialState = {
  list: [],
  currUserList: []
}

const reducer = (state=initialState, action) => {
  const newState = Object.assign({}, state);

  switch (action.type){
    case GET_ORDERS:
    newState.list = action.list
    break;

    case GET_CURRENT_USER_ORDERS:
    newState.currUserList = action.currUserList;
    break;

    default:
      return state
  }
  return newState;
}

export default reducer;
