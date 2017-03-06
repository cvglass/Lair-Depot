import React from 'react'
import { Link } from 'react-router'

const Category = ({ categories }) => {
  return (
    <div className="categoryContainer row">
      {
        categories.map((category) => {
          return <div className="col-sm-3 col-md-3 unstyle-link" key={category.id}><Link to={`/categories/${category.id}`}><h3>{category.name}</h3></Link><p>{category.description}</p></div>
        })
      }
    </div>
  )
}

export default Category;
