import React from 'react';

/*not sure if this will work; need to test
when more pieces are in place*/

  const stuff = [
    {
      id: 1,
      title: "sup though",
      created_at: '1234435',
      user: {
        name: 'hello'
      },
      rating: 4,
      description: 'fadsfadsfadsfsafds'
    },
     {
      id: 2,
      title: "sup though 2",
      created_at: '123443325',
      user: {
        name: 'hell3o'
      },
      rating: 4,
      description: 'fasdsfadsfsdfasdfasf',
    },
     {
      id: 3,
      title: "sup though3",
      created_at: '1234432345',
      user: {
        name: 'hello34'
      },
      rating: 3,
      description: 'fdasfsadfsdfs',
    }
  ]
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

const Reviews = ({reviews}) => {
  console.log(stuff)
  return (
    <div className="row">
      {stuff.map(review => {
        return (
          <div key={review.id}>
            <ul className="review">{getStars(review)}</ul>
            <span className="reviewTitle">{review.title}</span>
            <span>By {review.user.name} on {review.created_at}</span>
            <p>{review.description}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Reviews
