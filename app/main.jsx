'use strict'
import React from 'react'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'

import store from './store'

import Jokes from './components/Jokes'
import Login from './components/Login'
import WhoAmI from './components/WhoAmI'
import Reviews from './components/Reviews'

import CategoryContainer from './containers/CategoryContainer'
import OrdersContainer from './containers/OrdersContainer'
import UserContainer from './containers/UserContainer'
import NavBarContainer from './containers/NavbarContainer'
import ProductsContainer from './containers/ProductsContainer'
import ProductContainer from './containers/ProductContainer'
import CartContainer from './containers/CartContainer'

import { getOrders } from './action-creators/orders'
import { listProducts } from './action-creators/products'
import { listProduct } from './action-creators/product'
import { pullReviews } from './action-creators/reviews'
import {getCart} from './action-creators/cart'

const ExampleApp = connect(
  ({ auth }) => ({ user: auth })
) (
  ({ user, children }) =>
    <div>
      <NavBarContainer />
      {children}
    </div>
)

const onOrdersEnter = () => {
  store.dispatch(getOrders())
}

const onProductsEnter = (nextRouterState) => {
  store.dispatch(listProducts())
}

const onProductEnter = (nextRouterState) => {
  let productId = nextRouterState.params.id;
  console.log('productId', productId);
  store.dispatch(listProduct(productId));
  store.dispatch(pullReviews(productId));
}


render (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={ExampleApp}>
        <IndexRedirect to="/categories" />
        <Route path = "/reviews" component={Reviews} />
        <Route path="/jokes" component={Jokes} />
        <Route path="/categories" component={CategoryContainer} />
        <Route path="/products" component={ProductsContainer} onEnter={onProductsEnter} />
        <Route path="/products/:id" component={ProductContainer} onEnter={onProductEnter} />
        <Route path="/orders" component={OrdersContainer} onEnter={onOrdersEnter} />
        <Route path="/profile" component={UserContainer} />
        <Route path="/cart"  component={CartContainer} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
)
//<Route path="/nav" component={NavBarContainer} />
