import React from 'react';
import {Link} from 'react-router';

export const Products = ({products}) => {
  return (
    <div className="row">
      {products.map(product => {
        return (
          <div key={product.id}>
            <Link className="unstyle-link" to={`/products/${product.id}`}>
              <img className="col-md-2 product-thumbnail" src={product.imageUrl} />
              <div className="col-md-4">
                <h4>{product.name}</h4>
                <span>${product.price}</span>
              </div>
            </Link>
          </div>
        )
      })}
    </div>
  )
}
