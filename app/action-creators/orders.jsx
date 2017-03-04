import { GET_ORDERS } from '../constants';
import axios from 'axios'


export const getOrders = () =>
  dispatch => {
    axios.get('/api/orders')
    .then(res => res.data)
    .then(orders => dispatch(listOrders(orders)))
    .catch(err => console.log(err))
  }

export const listOrders = (orderList) => {
  return {
    type: GET_ORDERS,
    list: orderList
  }
}
