import {GET_USERS} from '../constants';

const initialState = {
  list: []
}

const reducer = (state = initialState, action) => {
  const newState = Object.assign({}, state);

  switch (action.type) {
    case GET_USERS:
      newState.list = action.list;
      return newState;

    default:
      return state;
  }
}

export default reducer;
