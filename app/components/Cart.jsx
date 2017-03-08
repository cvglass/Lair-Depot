import React from 'react';
import {Link} from 'react-router'
const Cart = ({mycart,displayCart}) => {
  console.log(displayCart)
  console.log(mycart)
  return (
  <div>
    {mycart.products.length && displayCart? (<div> 
      {displayCart.map((item)=> (
        <div key ={item.id}>
          <ul  >item: {item.name} quantity: {item.quantity} price:{item.price*item.quantity}</ul>
          <img className="product-thumbnail" src={item.imageUrl}/>
        </div>
      ))}
      </div>) : null
    }
    hi
    <Link to="/">submit</Link>
  </div>
)
}

export default Cart;