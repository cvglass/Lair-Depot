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
  const newArr = []
  for (var prod in prodArr){
    if (prodArr[prod].cart_id === item.cart_id && prodArr[prod].product_id === item.product_id){
      newArr[prod] = item;
    }
    else{
    newArr[prod] = prodArr[prod]

    }
  }
  return newArr;
}

export const updateCart = (products) => ({
  type: UPDATE_CART,
  products: products
})

export const addToCart = (cartId, productId, userId, quantity, products) => 
  dispatch =>
    axios.post(`/api/cart/`, {
      quantity: quantity,
      cart_id: cartId,
      product_id: productId,
    })
    .then(newCartItem => {
    const item = newCartItem.data.item;
    const created = newCartItem.data.created;
    const newitem = Object.assign(item, {quantity: quantity})
    axios.put('/api/cart/', newitem)
    .then(() => {
      if (created){
        dispatch(addCart(newitem))
      }
      else {
        dispatch((updateCart(updateProducts(products, newitem)))
      )
      }
    })
  })


