import React from 'react';
import {Link} from 'react-router';

export const Products = ({products}) => {
  return (
    <div className="productsContainer row">
      {products.map(product => {
        return (
          <div className="col-sm-3 col-md-3" key={product.id}>
            <Link className="unstyle-link" to={`/products/${product.id}`}>
              <img className="product-thumbnail" src={product.imageUrl} />
              <div className="">
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
