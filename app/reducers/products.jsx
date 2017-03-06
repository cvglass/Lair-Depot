import {GET_PRODUCTS} from '../constants';

const initialState = {
  //List of product ids
  list: []
};

const reducer = (state = initialState, action) => {

  let newState = Object.assign({}, state);

  switch(action.type) {

    case GET_PRODUCTS:
      newState.list = action.list;
      return newState;

    default:
      return state;
  }
}

export default reducer;
