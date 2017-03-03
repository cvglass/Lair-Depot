import React from 'react';

import {Reviews} from './Reviews';

export const Product = ({product, handleClick}) => {
  return (
    <div>
      <img src={product.imageUrl} />
      <div>
        <span>{product.name}</span>
        <span>{product.description}</span>
      </div>
      <button onClick={handleClick} type="button">Add to cart</button>
      <Reviews reviews={product.reviews} />
    </div>
  )
}
