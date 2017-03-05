import React from 'react';
import { connect } from 'react-redux';
import Navbar from '../components/Navbar';
import {changeCurrent} from '../action-creators/navbar';

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
      dispatch(changeCurrent(newCurr))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(
  class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {inputValue: ''};
      this.handleChange = this.handleChange.bind(this);
    }

    handleChange (evt) {
      console.log('changed')
      const inputValue = evt.target.value;
      this.setState({ inputValue });
    }

    handleSubmit (evt) {
      evt.preventDefault();
      console.log('state', this.state)
      let input = this.state.inputValue;
      this.setState({
        inputValue: ''
      });
      console.log('submit');
      window.location.replace(`https://google.com`);
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
)
