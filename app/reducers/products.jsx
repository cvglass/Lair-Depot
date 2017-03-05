import {GET_PRODUCTS, SET_PRODUCT} from '../constants';

const initialState = {
  list: [],
  currentProduct: {}
};

const reducer = (state = initialState, action) => {

  let newState = Object.assign({}, state);

  switch(action.type) {

    case GET_PRODUCTS:
      newState.list = action.list;
      return newState;

    case SET_PRODUCT:
      newState.currentProduct = action.currentProduct;

    default:
      return state;
  }
}

export default reducer;
