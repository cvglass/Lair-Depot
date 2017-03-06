import React from 'react'
import { Link } from 'react-router'

const Category = ({ categories }) => {
  return (
    <ul className="categoryContainer">
      {
        categories.map((category) => {
          return <li className="unstyle-link" key={category.id}><Link to={`/categories/${category.id}`}><h3>{category.name}</h3></Link><p>{category.description}</p></li>
        })
      }
    </ul>
  )
}

export default Category;
