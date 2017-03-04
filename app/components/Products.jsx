import React from 'react';

const Products = ({products}) => {
  return (
    {products.map(product => {
      return (
        <div>
          <Link to={`/api/products/${product.id}`}>
            <img src={product.imageUrl} />
            <div>
              <span>{product.name}</span>
              <span>{product.description}</span>
            </div>
          </Link>
        <div>
      )
    })}
  )
}
