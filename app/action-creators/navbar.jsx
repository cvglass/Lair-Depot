import {CHANGE_NAV_VIEW} from '../constants';
import axios from 'axios';

export const changeView = newView => ({
  type: CHANGE_NAV_VIEW,
  newView: newView
})


export const listProduct = (productId) =>
  dispatch =>
    axios.get(`/api/products/${productId}`)
      .then(res => res.data)
      .then(product => dispatch(setProduct(product)))
      .catch(err => console.log(err));

export const findProductBySearch = productName => {
  axios.get(`/api/products?name=${productName}`)
}
