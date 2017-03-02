import React from 'react';
import {GET_REVIEWS} from '../constants';

const initialState = [];

export const reviewsReducer = (state = initialState, action) => {
  switch (action.type) {

    case GET_REVIEWS:
      return action.reviews;

    default:
      return state;
  }
}

