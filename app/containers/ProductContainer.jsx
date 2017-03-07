import React from 'react';
import {connect} from 'react-redux';
import {addToCart} from '../action-creators/cart'
import {Product} from '../components/Product';

const mapStateToProps = state => {
  return {
    product: state.currentProduct.currentProduct,
    reviews: state.reviews.list,
    products: state.carts.cart.products,
    cartId: state.carts.cart.id,
    userId: state.auth.id,
  };
};

// temporary function for adding to cart
// what will the cart route be?
const mapDispatchToProps = (dispatch) => {
  return {
    handleClick (cartId, productId, userId, quantity, products) {
      dispatch(addToCart(cartId, productId, userId, quantity, products))
    }
  };
};
class ProductContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      inputValue: '1',
    }
   this.handleChange= this.handleChange.bind(this)
  }
  handleChange (evt) {
    const inputV= evt.target.value;
    this.setState({inputValue: inputV});
  }
   
  render(){
    return <Product state={this.state} handleClick={this.props.handleClick} product ={this.props.product}
      reviews= {this.props.reviews}
      products= {this.props.products}
      cartId={this.props.cartId}
      inputValue={this.state.inputValue}
      userId= {this.props.userId} change={this.handleChange} />
  }

}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductContainer)
