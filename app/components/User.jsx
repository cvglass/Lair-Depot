import React from 'react';

const User = ({auth, address}) => {

  console.log("address is: ", address);
  return (
    <div className="profileContainer">
      {auth && address ? (
        <div>

        <h1>{auth.name}</h1>
          <ul>
            <li>Email: {auth.email}</li>
            <li>Billing Address: {address}</li>
          </ul>
        </div>) : null }
    </div>
  )
}

export default User;
