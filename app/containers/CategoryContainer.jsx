import React from 'react';
import Category from '../components/Category';
import {connect} from 'react-redux'

const mapStateToProps = (state) => {
  return {
    categories: state.category.list,
    user: state.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Category)



// reducer for categories
// that state will have categoriesList
