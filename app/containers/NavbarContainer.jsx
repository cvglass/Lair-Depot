import React from 'react'
import { connect } from 'react-redux';
import Navbar from '../components/Navbar'
import {changeCurrent} from '../action-creators/navbar'


const mapStateToProps = (state) => {
  return {
    current: state.navbar.current,
    list: state.navbar.list,
    adminList: state.navbar.adminList,
    user: state.auth,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    changeCurrent(newCurr){
      dispatch(changeCurrent(newCurr))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
