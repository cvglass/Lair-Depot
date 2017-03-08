import React from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import {browserHistory} from 'react-router';

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
    this.descriptionChange = this.descriptionChange.bind(this);
    this.ratingChange = this.ratingChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  descriptionChange(evt) {
    this.setState(
      {inputDescription: evt.target.value}
    )
  }

  ratingChange(evt) {
    this.setState(
      {inputRating: evt.target.value}
    )
  }

  handleSubmit(evt) {
    evt.preventDefault();
    let productId = this.props.product.id;

    axios.post(`/api/products/${productId}/review`, {
      rating: evt.target.rating.value,
      description: evt.target.description.value,
      userId: this.props.user.id
    })
    browserHistory.push(`/products/${productId}`);
  }

  render () {
    return (
      <UserReview
        product={this.props.product}
        user={this.props.user}
        handleSubmit={this.handleSubmit}
        descriptionChange={this.descriptionChange}
        ratingChange={this.ratingChange}
      />
    )
  }
})
