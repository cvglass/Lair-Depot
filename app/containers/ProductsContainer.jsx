import React from 'react';
import {connect} from 'react-redux';

import {Products} from '../components/Products';

const mapStateToProps = state => {
  return {
    products: state.products.products
  }
}

export default connect(
  mapStateToProps
)(Products);
