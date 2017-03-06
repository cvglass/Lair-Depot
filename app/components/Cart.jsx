import React from 'react';
import {Link} from 'react-router'
const Cart = ({mycart, ToCart}) => {
  return (
  <div>
    {mycart.products.length? (<div> 
      {mycart.products.map((item)=> (
        <ul key ={item.product_id} >item: {item.product_id}, quantity: {item.quantity}</ul>
      ))}
      </div>) : null
    }
    hi
    <Link to="/">submit</Link>
  </div>
)
}

export default Cart;