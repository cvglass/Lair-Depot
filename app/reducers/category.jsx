import axios from 'axios'
const GET_CATEGORIES = 'GET_CATEGORIES';

const initialState={
  list: [{
    id:1,
    name: "weapons",
  },
  {
    id: 2,
    name: "Evil Pets"
  }],
}

const reducer = (state= initialState, action) => {
  const newState = Object.assign({}, state);
  switch (action.type){
    case GET_CATEGORIES:
      newState.list = action.list;
      break;
    default:
      return state;
  }
  return newState;
}

export const getCategories = () => 
  dispatch =>
    axios.get('api/categories') //trying to destructure to access data
      .then(({data}) => dispatch(listCategories(data)))
      .catch((err) =>console.log(err) )

export const listCategories = categoryList => ({
  type: GET_CATEGORIES,
  list: categoryList,
})



export default reducer;

