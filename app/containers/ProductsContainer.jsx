import React from 'react';
import {connect} from 'react-redux';

import {Products} from '../components/Products';

const mapStateToProps = state => {
  return {
    products: state.products.list
  }
}

export default connect(mapStateToProps, null)(Products)
