import {ADD_TO_CART, REMOVE_FROM_CART, SUBMIT_CART, SET_CART} from '../constants';
import axios from 'axios';

export const setCart = (newCart ) =>({
  type: SET_CART,
  cart: newCart,
})

export const getCart = (userID) => {
  return (dispatch) => {
    axios.get(`/api/carts/${userID}`)
    .then(userCart => {
      const CartId = userCart.data.id;
      //console.log(CartId);
      axios.get(`/api/cart/${CartId}`)
        .then(products => dispatch(setCart({
          id: CartId,
          userid: userID,
          products: products.data
        })))
      }
    )}
}
export const addCart = (item) => ({
  type: ADD_TO_CART,
  newProduct: item,
})

export const addToCart = (cartId, productId, userId, quantity) => {
  return (dispatch) => {
    console.log('cool?')
    axios.post(`/api/cart/`, {
      quantity: quantity,
      cart_id: cartId,
      product_id: productId,
    })
    .then(newCartItem => dispatch(addCart(newCartItem.data)))
  }
}
