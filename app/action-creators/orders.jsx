import { GET_ORDERS, GET_CURRENT_USER_ORDERS } from '../constants';
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

export const listUserOrders = (orderList) => {
  return {
    type: GET_CURRENT_USER_ORDERS,
    currUserList: orderList
  }
}

export const getUserOrders = userId =>
  dispatch => {
    axios.get(`/api/orders/${userId}`)
    .then( res => {
      dispatch(listUserOrders(res.data))
    })
    .catch( (err) => console.error(err))
  }
