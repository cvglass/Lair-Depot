import axios from 'axios'
import {UPDATE_USERINFO} from '../constants';
import {retrieveUserAddress} from './address.jsx';
import {getCart} from '../reducers/cart'

const reducer = (state=null, action) => {
  switch(action.type) {
  case AUTHENTICATED:
    return action.user
  }
  return state
}

const AUTHENTICATED = 'AUTHENTICATED'
export const authenticated = user => ({
  type: AUTHENTICATED, user
})

export const updateUserInfo = (userInfo) => {
  return {
    type: UPDATE_USERINFO,
    info: userInfo
  }
}

export const login = (username, password) =>
  dispatch =>
    axios.post('/api/auth/login/local',
      {username, password})
      .then(() => dispatch(whoami()) )
      .catch(() => dispatch(whoami()))

export const logout = () =>
  dispatch =>
    axios.post('/api/auth/logout')
      .then(() => dispatch(whoami()))
      .catch(() => dispatch(whoami()))

export const whoami = () =>
  dispatch =>
    axios.get('/api/auth/whoami')
      .then(response => {
        const user = response.data
        dispatch(authenticated(user))
      })
      .catch(failed => dispatch(authenticated(null)))

export default reducer
