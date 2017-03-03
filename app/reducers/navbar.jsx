import axios from 'axios';
// actions
import {CHANGE_CURRENT} from '../constants.jsx'
const initialState = {
  current: {
    id: 1,
    name: 'Products'
  },
  list: [
    {
      id: 1,
      name: 'Products'
    },
    {
      id: 2,
      name: 'User'
    },
    {
      id: 3,
      name: 'Cart'
    },
  ],
  adminList: [
    {
      id: 4,
      name: 'Users'
    },
    {
      id: 5,
      name: 'Inventory'
    },
    {
      id: 6,
      name: 'Orders' 
    }
  ]

}

const reducer = (state = initialState, action) => {
  const newState = Object.assign({}, state);
  switch (action.type){
    case CHANGE_CURRENT:
      newState.current = action.newCurr;
      break;
    default:
      return state;
  }
  return newState;
}

export default reducer;
