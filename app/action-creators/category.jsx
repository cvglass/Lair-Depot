import {GET_CATEGORIES} from '../constants';
import axios from 'axios'

export const listCategories = categoryList => ({
  type: GET_CATEGORIES,
  list: categoryList,
})

export const getCategories = () =>
  dispatch =>
    axios.get('api/categories') //trying to destructure to access data
      .then(({data}) => dispatch(listCategories(data)))
      .catch((err) =>console.log(err) )
