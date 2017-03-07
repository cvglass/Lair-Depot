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

import { getOrders } from './action-creators/orders'
import { listProducts, getProductsByCategory } from './action-creators/products'
import { listProduct } from './action-creators/product'
import { pullReviews } from './action-creators/reviews'
import { getCategories } from './action-creators/category'
import { retrieveUserAddress } from './action-creators/address.jsx';

const ExampleApp = connect(
  ({ auth }) => ({ user: auth })
) (
  ({ user, children }) =>
    <div>
      <NavBarContainer />
      <div className="container-fluid allChildrenContainer" >
        {children}
      </div>
    </div>
)

const onProfileEnter = (nextRouterState) => {
  //let userId =  store.getState().auth.id;
  let userId = nextRouterState.params.id;
  store.dispatch(retrieveUserAddress(userId));
}

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

const onCategoriesEnter = (nextRouterState) => {
  store.dispatch(getCategories())
  //added for test of address retrieval
  let userId =  store.getState().auth.id;
  store.dispatch(retrieveUserAddress(userId));
}

const onCategoryEnter = (nextRouterState) => {
  let categoryId = nextRouterState.params.id;
  store.dispatch(getProductsByCategory(categoryId))
}

render (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={ExampleApp}>
        <IndexRedirect to="/categories" />
        <Route path = "/reviews" component={Reviews} />
        <Route path="/jokes" component={Jokes} />
        <Route path="/categories" component={CategoryContainer} onEnter={onCategoriesEnter}/>
        <Route path="/categories/:id" component={ProductsContainer} onEnter={onCategoryEnter} />
        <Route path="/products" component={ProductsContainer} onEnter={onProductsEnter} />
        <Route path="/products/:id" component={ProductContainer} onEnter={onProductEnter} />
        <Route path="/orders" component={OrdersContainer} onEnter={onOrdersEnter} />
        <Route path="/profile" component={UserContainer} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
)
//<Route path="/nav" component={NavBarContainer} />
