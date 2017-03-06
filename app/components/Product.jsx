import React from 'react';

import Reviews from './Reviews';
import {Link} from 'react-router'
const arr = [];
for (var i = 0; i < 100; i++){
  arr.push(i);
}

export const Product = ({change, handleClick, product, products, cartId, userId, inputValue}) => {
  
  return (
    <div>
      <div className="row">
        <img className="col-md-4 product-image" src={product.imageUrl} />
        <div className="col-md-5">
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>${product.price}</p>
          <select onChange={change} >
            {arr.map((index)=> {
              return <option value={index}>{index}</option>
            })}
          </select>
        </div>
        <div className="col-md-3">
          <Link to={'/'}>
            <button onClick={(e) => handleClick(cartId, product.id, userId, inputValue, products )} type="button">Add to cart</button>
          </Link>
        </div>
      </div>
      <Reviews reviews={product.reviews} />
    </div>
  )
}
