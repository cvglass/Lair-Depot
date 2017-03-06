import {ADD_TO_CART, REMOVE_FROM_CART, SUBMIT_CART, SET_CART, UPDATE_CART} from '../constants';
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
const updateProducts = (prodArr, item) => {
  console.log(prodArr)
  for (var prod in prodArr){
    if (prod.cart_id === item.cart_id && prod.product_id === item.product_id){
      prod.cart = item;
    }
  }
  return prodArr;
}

export const updateCart = (products) => ({
  type: UPDATE_CART,
  products: products
})
export const addToCart = (cartId, productId, userId, quantity, products) => {
  return (dispatch) => {
    console.log('cool?')
    axios.post(`/api/cart/`, {
      quantity: quantity,
      cart_id: cartId,
      product_id: productId,
    })
    .then(newCartItem => {
    console.log(newCartItem)
    const item = newCartItem.data.item;
    const created = newCartItem.data.created;
    if (created){
      dispatch(addCart(item))
    }
    else{
      console.log('we just updated an item',item)
      const newitem = Object.assign(item, {quantity: quantity})
      axios.put('/api/cart/', newitem)
      .then(updatedItem => {
        console.log(updatedItem);
        dispatch((updateCart(updateProducts(products, updatedItem)))
      )}
      )
    }
  })
  }
}

