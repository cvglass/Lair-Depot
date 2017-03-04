import React from 'react';
import { Link } from 'react-router';

const Orders = ({ orders }) => {
  return (
    <ul>
      {orders.map(order => {
        return <li key={order.id}>Order Number: <Link to="/orders/:id">{order.id}</Link></li>
      })}
    </ul>
  )
}

export default Orders
