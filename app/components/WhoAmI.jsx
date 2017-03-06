import React from 'react'

export const WhoAmI = ({ user, logout }) => (
  <div display="inline-block" className="whoami">
    <span className="whoami-user-name">{user && user.name}</span>
    <button className="logout btn btn-primary" onClick={logout}>Logout</button>
  </div>
)

import {logout} from 'APP/app/reducers/auth'
import {connect} from 'react-redux'

export default connect (
  ({ auth }) => ({ user: auth }),
  {logout},
) (WhoAmI)
