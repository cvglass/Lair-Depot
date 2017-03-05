import {SET_PRODUCT} from '../constants';
import axios from 'axios';

//single product
export const setProduct = (product) => {
  return {
    type: SET_PRODUCT,
    currentProduct: product
  }
}

export const listProduct = (productId) =>
  dispatch =>
    axios.get(`/api/products/${productId}`)
      .then(res => res.data)
      .then(product => dispatch(setProduct(product)))
      .catch(err => console.log(err));
