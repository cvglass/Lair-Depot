import {GET_USERS} from '../constants';
import axios from 'axios';

export const getUsers = (users) => {
  return {
    type: GET_USERS,
    list: users
  }
}

export const listUsers = () => {
  return dispatch => {
    axios.get('/api/users')
      .then(res => res.data)
      .then(users => dispatch(getUsers(users)))
      .catch(err => console.log(err))
  }
}

/* not working yet */
export const makeAdmin = (userId) => {
  axios.put(`/api/users/${userId}`, {isAdmin: 'true'})
    .then(res => res.data)
    .catch(err => console.log(err))
}
