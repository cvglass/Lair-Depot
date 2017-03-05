import {GET_CATEGORIES} from '../constants';

const initialState =  {
  list: [],
  productList: []
}

const reducer = (state = initialState, action) => {
  const newState = Object.assign({}, state);
  switch (action.type){
    case GET_CATEGORIES:
      newState.list = action.list;
      break;

    default:
      return state;
  }
  return newState;
}

export default reducer;
