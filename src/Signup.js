import React, { Fragment, Component } from 'react';
import AdvancedForm from './AdvancedForm';
import axios from 'axios';

class Signup extends Component {
  state = {}

  handler = async ({ email, password }) => {
    this.setState({ errMsg: null, authenticated: null });
    try {
      const response = await axios.post('http://35.165.129.25:3090/signup', { email, password });
      this.setState({ authenticated: response.data.token });
    } catch (err) {
      this.setState({ errMsg: err.response.data.error });
      return false;
    }
    return true;
  }

  render() {
    return (
      <Fragment>
        <h1>Signup</h1>
        <AdvancedForm email="" password="" customSubmit={(email, password) => this.handler(email, password)} />
        {this.state.errMsg}
        <br />
        {this.state.authenticated}
      </Fragment>
    )
  }

}

export default Signup;
