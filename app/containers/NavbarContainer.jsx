import React from 'react';
import { connect } from 'react-redux';
import Navbar from '../components/Navbar';
import {changeView} from '../action-creators/navbar';
import {findProductBySearch} from '../action-creators/products'

class NavbarContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {inputValue: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange (evt) {
    const inputValue = evt.target.value;
    this.setState({ inputValue });
  }

  handleSubmit (evt) {
    evt.preventDefault();
    let input = this.state.inputValue;
    this.setState({
      inputValue: ''
    });
    window.location.replace(`/api/products?name=${input}`);
  }

  render() {
    return <Navbar
      current={this.props.current}
      list={this.props.list}
      adminList={this.props.adminList}
      user={this.props.user}
      changeCurrent={this.props.changeCurrent}
      handleSubmit={this.handleSubmit}
      handleChange={this.handleChange}
      inputValue={this.state.inputValue}
    />
  }
}

const mapStateToProps = (state) => {
  return {
    current: state.navbar.current,
    list: state.navbar.list,
    adminList: state.navbar.adminList,
    user: state.auth
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    changeCurrent(newCurr){
      dispatch(changeView(newCurr))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavbarContainer)
