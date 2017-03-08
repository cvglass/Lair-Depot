import React from 'react';

const User = ({auth, address, orders}) => {

  return (
    <div className="profileContainer container-fluid">
      {auth ? (
      <div className="row">
        <div className="col-sm-4 col-md-4">
          <img className="profileImage" src={auth.imageUrl} />
        </div>

        <div className="col-sm-7 col-md-7">

        <h1>{auth.name}</h1>
          <ul>
            <div className="profileCell">Email: {auth.email}</div>
            <div className="profileCell">Billing Address:{address}</div>
          </ul>
          <div>
            <h4>Orders</h4>
              {
                orders.map( (order, index) => {
                  return (
                    <ul className="order" key={order.id}>
                      <h5>Order: {index + 1}</h5>
                      <div className="profileCell">Subtotal: {order.price}</div>
                      <div className="profileCell">Status: {order.status}</div>
                    </ul>
                  )
                })
              }
          </div>
        </div>
        </div>) : null }
    </div>
  )
}

export default User;
