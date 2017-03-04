import {GET_PRODUCTS, SET_PRODUCT} from '../constants';

const initialState = {
  products: [],
  currentProduct: {}
};

export const productsReducer = (state = initialState, action) => {

  let newState = Object.assign({}, state);

  switch(action.type) {

    case GET_PRODUCTS:
      newState.products = action.products;
      return newState;

    case SET_PRODUCT:
      newState.currentProduct = action.currentProduct;

    default:
      return state;
  }
}
