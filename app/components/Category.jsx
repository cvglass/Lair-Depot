import React from 'react'
import { Link } from 'react-router'


const Category = ({user, categories }) => {

  let userView = (
    <div className="categoryContainer">
      <div>
        <h1>Categories</h1>
      </div>
      <div className="categoryContainer row">
      {
        categories.map((category) => {
          return (
            <div className="col-sm-4 col-md-4 unstyle-link" key={category.id}>
              <Link to={`/categories/${category.id}`}>
                <h3>{category.name}</h3>
              <img className="categoryImage" src={category.imageUrl} />
              </Link>
              <div className="descContainer">
                <p className="desc">{category.description}</p>
              </div>
            </div>
            )
        })
      }
    </div>
  </div>)

  let nonuserView = (
    <div className="magic-land">
      <h1>Magic Land!</h1>
      <h3>Yay!  Unicorns and rainbows!</h3>
      <img className="psych" src="/img/magic-land.jpg" />
      <p>Nothing to see here!</p>
    </div>
  )

  return (
    <div>
      {user && userView}
      {!user && nonuserView}
    </div>
  )
}

export default Category;
