import React from 'react';

const User = ({auth, address, info}) => {
  return (
    <div>
      {auth? (
        <div>

        <h2>Profile: {auth.name}</h2>
          <ul>
            <li>Email: {auth.email}</li>
            <li>Password: {auth.password}</li>
            <li>Admin Status: {auth.isAdmin}</li>
            <li>Billing Address:</li>
          </ul>
        </div>) : null }
    </div>
  )
}

export default User;