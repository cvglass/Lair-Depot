import {GET_PRODUCTS} from '../constants';
import axios from 'axios';

//all products
export const getProducts = (products) => {
  return {
    type: GET_PRODUCTS,
    list: products
  }
}

export const listProducts = () =>
  dispatch =>
    axios.get('/api/products')
      .then(res => res.data)
      .then(products => dispatch(getProducts(products)))
      .catch(err => console.log(err));
