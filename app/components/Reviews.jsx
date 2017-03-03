import React from 'react';

/*not sure if this will work; need to test
when more pieces are in place*/

  const stuff = [
    {
      title: "sup though",
      created_at: '1234435',
      user: {
        name: 'hello'
      },
      rating: 4,
      description: 'fadsfadsfadsfsafds'
    },
     {
      title: "sup though 2",
      created_at: '123443325',
      user: {
        name: 'hell3o'
      },
      rating: 4,
      description: 'fasdsfadsfsdfasdfasf',
    },
     {
      title: "sup though3",
      created_at: '1234432345',
      user: {
        name: 'hello34'
      },
      rating: 4,
      description: 'fdasfsadfsdfs',
    }
  ]
  const getStars = (review) => {
    let rating = review.rating,
        stars = [],
        difference = 5 - rating;

    for (let i = 0; i <= rating; i++) {
      stars.push((<li key={i}
                      className="fullStar">\u2605</li>));
    }

    if (difference > 0) {
      for (let i = 0; i < difference; i++) {
        stars.push((<li key={(i + 1) + difference}
                        className="emptyStar"> \u2606</li>));
      }
    }

    return stars;
  }

const Reviews = ({reviews}) => {
  console.log(stuff)
  return (
    <div>
  {    stuff.map(review => {
        console.log(review)
        return (
          <div>
            <ul className>{getStars(review)}</ul>
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
