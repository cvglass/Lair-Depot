import React from 'react'
import { Link } from 'react-router'

const Category = ({ categories }) => {
  return (
    <div className="categoryContainer row">
      {
        categories.map((category) => {
          return (
            <div className="col-sm-4 col-md-4 unstyle-link" key={category.id}>
              <Link to={`/categories/${category.id}`}>
                <h3>{category.name}</h3>
              <img className="categoryImage" src={category.imageUrl} />
              </Link>
              <p className="desc">{category.description}</p>
            </div>
            )
        })
      }
    </div>
  )
}

export default Category;
