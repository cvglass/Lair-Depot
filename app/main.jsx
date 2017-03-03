'use strict'
import React from 'react'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'

import store from './store'
import Jokes from './components/Jokes'
import Login from './components/Login'
import WhoAmI from './components/WhoAmI'
import CategoryContainer from './containers/CategoryContainer'
import OrdersContainer from './containers/OrdersContainer'

import { getOrders } from './action-creators/orders'

const ExampleApp = connect(
  ({ auth }) => ({ user: auth })
) (
  ({ user, children }) =>
    <div>
      <nav>
        {user ? <WhoAmI/> : <Login/>}
      </nav>
      {children}
    </div>
)

const onOrdersEnter = () => {
  store.dispatch(getOrders())
}

render (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={ExampleApp}>
        <IndexRedirect to="/categories" />
        <Route path="/categories" component={CategoryContainer} />
        <Route path="/orders" component={OrdersContainer} onEnter={onOrdersEnter}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
)
