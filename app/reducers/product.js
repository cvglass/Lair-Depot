import {SET_PRODUCT} from '../constants';

const initialState = {
  //integer that is a product id
  currentProduct: {}
};

const reducer = (state = initialState, action) => {

  let newState = Object.assign({}, state);

  switch(action.type) {

    case SET_PRODUCT:
      newState.currentProduct = action.currentProduct;
      return newState;

    default:
      return state;
  }
}

export default reducer;
