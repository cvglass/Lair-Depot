import {ADD_TO_CART, REMOVE_FROM_CART, UPDATE_CART, SUBMIT_CART, SET_CART} from '../constants';

const initialState = {
  cart: {
    id: -1,
    user_id: -1,
    products: [],
  }
}

const reducer = (state = initialState, action) => {
  const newState = Object.assign({}, state);
  switch (action.type){
    case ADD_TO_CART:
      newState.cart.products = [...newState.cart.products, action.newProduct];
      break;
    case REMOVE_FROM_CART:
      newState.cart.products = action.products;
      break;
    case SET_CART:
      newState.cart = action.cart;
      break;
    case UPDATE_CART:
      newState.cart.products = action.products;
      break;
    default:
      return state
  }
  return newState;
}

export default reducer;
