import React from 'react';
import {connect} from 'react-redux';

import {Product} from '../components/Product';

const mapStateToProps = state => {
  return {
    product: state.products.currentProduct
  };
};

//temporary function for adding to cart
//what will the cart route be?
const mapDispatchToProps = dispatch => {
  return {
    handleClick (cartId, productId, userId) {
      return dispatch(addToCart(cartId, productId, userId))
      .then(() => {window.history.push('/cart')});
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Product)
