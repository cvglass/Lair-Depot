import { GET_ORDERS } from '../constants';

const initialState = {
  //Should probably be an object mapping IDs to order info?
  list: []
}

const reducer = (state=initialState, action) => {
  const newState = Object.assign({}, state);

  switch (action.type){
    case GET_ORDERS:
    newState.list = action.list
    break;

    default:
      return state
  }
  return newState;
}

export default reducer;
