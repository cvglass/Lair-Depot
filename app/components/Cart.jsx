import React from 'react';
import {Link} from 'react-router'
const Cart = ({mycart, ToCart}) => {
  //console.log(getUserCart(1))

return (
  <div>
    {//addToCart(1,2,2,100)): null}
    }
    hi
    <Link to="/"> <button onClick={()=>ToCart('1','1','2',10)}>  hi</button></Link>
  </div>
)
}

export default Cart;