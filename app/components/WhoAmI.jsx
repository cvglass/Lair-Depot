import React from 'react'
import {getCart} from '../action-creators/cart'
export const WhoAmI = ({ user, logout, getCart }) => (
  <div className="navbar-header whoami">
    <span className="whoami-user-name">{user && user.name}</span>
    {getCart(user.id)}
    <button className="logout btn btn-primary" onClick={logout}>Logout</button>
  </div>
)

import {logout} from 'APP/app/reducers/auth'
import {connect} from 'react-redux'

export default connect (
  ({ auth }) => ({ user: auth }),
  {logout, getCart},
) (WhoAmI)
