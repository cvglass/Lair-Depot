import React from 'react';
import {GET_REVIEWS} from '../constants';

const initialState = {
  //Object mapping ids to reviews
  list: []
};

const reducer = (state = initialState, action) => {

  const newState = Object.assign({}, state);

  switch (action.type) {

    case GET_REVIEWS:
      newState.list = action.list;
      return newState;

    default:
      return state;
  }
}

export default reducer;

