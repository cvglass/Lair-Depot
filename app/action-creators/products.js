import {GET_PRODUCTS, SET_PRODUCT} from '../constants';
import axios from 'axios';

//all products
export const getProducts = (products) => {
  return {
    type: GET_PRODUCTS,
    products
  }
}

export const listProducts = () =>
  dispatch =>
    axios.get('/api/products')
      .then(res => res.data)
      .then(products => dispatch(getProducts(products)))
      .catch(err => console.log(err));

//single product
export const setProduct = (product) => {
  return {
    type: SET_PRODUCT,
    currentProduct: product
  }
}

export const listSingleProduct = (productId) =>
  dispatch =>
    axios.get(`/api/products/${productId}`)
      .then(res => res.data)
      .then(product => dispatch(setProduct(product)))
      .catch(err => console.log(err));
