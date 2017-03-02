import React from 'react';

/*not sure if this will work; need to test
when more pieces are in place*/

export const Reviews = ({reviews}) => {

  const getStars = (review) => {
    let rating = review.rating,
        stars = [],
        difference = 5 - rating;

    for (let i = 0; i <= rating; i++) {
      stars.push((<li key={i}
                      className="fullStar">\u2605</li>));
    }

    if (diff > 0) {
      for (let i = 0; i < diff; i++) {
        stars.push((<li key={(i + 1) + difference}
                        className="emptyStar"> \u2606</li>));
      }
    }

    return stars;
  }

  return (
    {reviews.map(review => {
      return (
        <div>
          <ul className>
            {getStars(review)};
          </ul>
          <span className="reviewTitle">{review.title}</span>
          <span>By {review.user.name} on {review.created_at}</span>
          <p>{review.description}</p>
        </div>
      )
    })}
  )
}
