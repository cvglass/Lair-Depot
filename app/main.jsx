'use strict'
import React from 'react'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'

import store from './store'
import axios from 'axios'
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
import UserReviewContainer from './containers/UserReviewContainer'
import CartContainer from './containers/CartContainer'

import { getOrders, getUserOrders } from './action-creators/orders'
import { listProducts, getProductsByCategory } from './action-creators/products'
import { listProduct } from './action-creators/product'
import { pullReviews } from './action-creators/reviews'
import {setDisplay} from './action-creators/cart'
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
  let addressId =  nextRouterState.params.id;
  store.dispatch(retrieveUserAddress(addressId));
  let userId = store.getState().auth.id;
  store.dispatch(getUserOrders(userId));
}

const onOrdersEnter = () => {
  store.dispatch(getOrders())
}

const onProductsEnter = (nextRouterState) => {
  store.dispatch(listProducts())
}

const onProductEnter = (nextRouterState) => {
  let productId = nextRouterState.params.id;
  store.dispatch(listProduct(productId));
  store.dispatch(pullReviews(productId));
}

const onCategoriesEnter = (nextRouterState) => {
  store.dispatch(getCategories())
}

const onCategoryEnter = (nextRouterState) => {
  let categoryId = nextRouterState.params.id;
  store.dispatch(getProductsByCategory(categoryId))
}

const onCartEnter = () => {
  let cart = store.getState('cart')
  let products = []
  if (cart){
    products = cart.carts.cart.products
    const productArr = [];
    products.forEach(product => {
      productArr.push(axios.get(`/api/products/${product.product_id}`))
    })
    Promise.all(productArr)
    .then(displayProducts => {
      const prod = displayProducts.map((product, ind) => {
        product.data.quantity = products[ind].quantity;
      return product.data
      })
    store.dispatch(setDisplay(prod))

    } )
  }
}

render (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={ExampleApp}>
        <IndexRedirect to="/categories" />
        <Route path = "/reviews" component={Reviews} />
        <Route path="/jokes" component={Jokes} />
        <Route path="/categories" component={CategoryContainer} onEnter={onCategoriesEnter} />
        <Route path="/categories/:id" component={ProductsContainer} onEnter={onCategoryEnter} />
        <Route path="/products" component={ProductsContainer} onEnter={onProductsEnter} />
        <Route path="/products/:id" component={ProductContainer} onEnter={onProductEnter} />
        <Route path="/products/:id/review" component={UserReviewContainer} />
        <Route path="/orders" component={OrdersContainer} onEnter={onOrdersEnter} />
        <Route path="/profile/:id" component={UserContainer} onEnter={onProfileEnter} />
        <Route path="/cart"  component={CartContainer} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
)
//<Route path="/nav" component={NavBarContainer} />
