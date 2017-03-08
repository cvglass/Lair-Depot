import React from 'react';
import {Link} from 'react-router'
const Cart = ({mycart,displayCart}) => {
  return (
  <div>
    {mycart.products.length && displayCart? (<div> 
      {displayCart.map((item)=> (
        <div key ={item.id}>
          <ul  >item: {item.name} quantity: {item.quantity} price:{Math.round(item.price*item.quantity)}</ul>
          <img className="product-thumbnail" src={item.imageUrl}/>
        </div>
      ))}
      </div>) : null
    }
    <h2> Total price is ${displayCart.reduce((total,item)=>{
      return total + Math.round(item.price*item.quantity)},0)}</h2>
    <Link to="/">submit</Link>
  </div>
)
}

export default Cart;