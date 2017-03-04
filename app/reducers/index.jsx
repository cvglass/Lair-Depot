import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  auth: require('./auth').default,
  category: require('./category').default,
  orders: require('./orders').default,
  user: require('./user').default,
  navbar: require('./navbar').default,
})

export default rootReducer
