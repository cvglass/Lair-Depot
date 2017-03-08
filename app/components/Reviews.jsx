import React from 'react';
import {Link} from 'react-router';

/*not sure if this will work; need to test
when more pieces are in place*/

const getStars = (review) => {
  let rating = review.rating,
      stars = [],
      difference = 5 - rating,
      j;

  for (let i = 0; i < rating; i++) {
    stars.push((<li key={`${review.id}-${i}`}
                    className="fullStar">&#x2605;</li>));
    j = i + 1;
  }

  if (difference > 0) {
    for (let i = 0; i < difference; i++) {
      stars.push((<li key={`${review.id}-${(j + i) + difference}`}
                      className="emptyStar">&#x2606;</li>));
    }
  }

  return stars;
}

const Reviews = ({product, user, reviews}) => {

  let numReviews = reviews.length;

  return (
    <div>
      <div className="row">
        <h4 className="reviewP">Reviews ({numReviews})</h4>
      </div>
      <div className="row">
        {reviews.map(review => {
          return (
            <div key={review.id}>
              <div className="panel panel-default">
                <div className="panel-body">
                {/*<span className="reviewTitle">{review.title}</span>*/}
                  <ul className="review">{getStars(review)}</ul>
                  <span>By <b>{review.user.name}</b> on {review.created_at}</span>
                </div>
              <p className="reviewP">{review.description}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Reviews
