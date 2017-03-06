import React from 'react';

const UserReview = ({user, product, handleSubmit, handleChange}) => {
  console.log('user', user)
  return (
    <div>
      <h3>Leave a Review</h3>
      <p><strong>Product:</strong> {product.name}</p>
      <form onChange={handleChange} onSubmit={handleSubmit}>
        <label><strong>Rating: </strong></label><br />
        <input type="radio" name="rating" value="1" />
        <input type="radio" name="rating" value="2" />
        <input type="radio" name="rating" value="3" />
        <input type="radio" name="rating" value="4" />
        <input type="radio" name="rating" value="5" /> <br />

        <label><strong>Review: </strong></label><br />
        <textarea name="description" placeholder="Leave your product review here." /> <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default UserReview;
