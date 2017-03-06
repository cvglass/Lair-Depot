import React from 'react';
import {Link} from 'react-router'
const Cart = ({mycart, ToCart}) => {
  //console.log(getUserCart(1))
  console.log(mycart.products)
return (
  <div>
    {mycart.products.length? (<div> 
      {mycart.products.map((item)=> (
        <ul>item: {item.product_id}, quantity: {item.quantity}</ul>
      ))}
      </div>) : null
    }
    hi
    <Link to="/"> <button onClick={()=>ToCart('1','1','2',110, mycart.products)}>  hi</button></Link>
  </div>
)
}

export default Cart;