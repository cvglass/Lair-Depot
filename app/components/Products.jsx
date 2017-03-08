import React from 'react';
import {Link} from 'react-router';

export const Products = ({products}) => {
  return (
    <div className="row">
      {products.map(product => {
        return (
          <div className="col-xs-6 col-md-3">
            <div className="thumbnail">
              <Link className="unstyle-link" to={`/products/${product.id}`}>
                <img className="product-thumbnail" src={product.imageUrl} />
                <h4>{product.name}</h4>
              </Link>
              <span>${product.price}</span>
            </div>
          </div>
        )
      })}
    </div>
  )
}
