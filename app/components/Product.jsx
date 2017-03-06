import React from 'react';

import Reviews from './Reviews';

export const Product = ({user, product, handleClick, reviews}) => {

  return (
    <div>
      <div className="row">
        <img className="col-md-4 product-image" src={product.imageUrl} />
        <div className="col-md-5">
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>${product.price}</p>
        </div>
        <div className="col-md-3">
          <button onClick={handleClick} type="button">Add to cart</button>
        </div>
      </div>
      <Reviews product={product} user={user} reviews={reviews} />
    </div>
  )
}
