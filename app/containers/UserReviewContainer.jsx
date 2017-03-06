import React from 'react';
import {connect} from 'react-redux';
import axios from 'axios';

import UserReview from '../components/UserReview';
import {submitReview} from '../action-creators/reviews';

const mapStateToProps = state => {
  return {
    product: state.currentProduct.currentProduct,
    user: state.auth
  }
}

export default connect(
  mapStateToProps,
  null
)(class extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      inputDescription: '',
      inputRating: 1,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    let description = evt.target.description.value;
    let rating = evt.target.rating.value;
    this.setState({
      inputDescription: description,
      inputRating: rating
    });
  }

  handleSubmit(evt) {
    console.log('productId', this.props.product.id);
    console.log('rating', evt.target.rating.value);
    console.log('text', evt.target.description.value);
    let productId = this.props.product.id;

    axios.put(`/api/products/${productId}/review`, {
      rating: evt.target.rating.value,
      description: evt.target.description.value,
      product_id: productId
    });
  }

  render () {
    return (
      <UserReview
        product={this.props.product}
        user={this.props.user}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
      />
    )
  }
}

)
