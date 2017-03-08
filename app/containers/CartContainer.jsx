import React from 'react';
import Cart from '../components/Cart';
import {connect} from 'react-redux';
import {addToCart} from '../action-creators/cart'
const mapStateToProps = (state) =>{
  return {
    mycart: state.carts.cart,
    displayCart: state.carts.display
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    ToCart (cart, product, user, quantity, products){
      dispatch(addToCart(cart, product, user, quantity, products))
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Cart)
