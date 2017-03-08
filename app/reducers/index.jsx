import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  auth: require('./auth').default,
  category: require('./category').default,
  orders: require('./orders').default,
  address: require('./address').default,
  navbar: require('./navbar').default,
  products: require('./products').default,
  currentProduct: require('./product').default,
  reviews: require('./reviews').default,
  carts: require('./cart').default,
})

export default rootReducer
