import React from 'react'

const Category = ({ categories }) => {
  console.log('our Categories list', categories);
  return (
    <ul>
      {
        categories.map((category) => {
          return <li key={category.id}> {category.name} </li>
        })
      }
    </ul>
  )
}

export default Category;
