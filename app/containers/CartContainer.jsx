import React from 'react';
import Cart from '../components/Cart';
import {connect} from 'react-redux';
import {addToCart} from '../action-creators/cart'
const mapStateToProps = (state) =>{
  return {
    mycart: state.carts.cart
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    ToCart (cart, product, user, quantity){
      console.log('clicked')
      dispatch(addToCart(cart, product, user, quantity))
      console.log('dispatched?')
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
