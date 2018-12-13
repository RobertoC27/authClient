import React, { Component } from 'react';
import AdvancedForm from './AdvancedForm';
import axios from 'axios';

class Signin extends Component {
    state = {}

    handler = async ({ email, password }) => {
        this.setState({ errMsg: null, authenticated: null });
        try {
            const response = await axios.post('http://35.165.129.25:3090/signin', { email, password });
            console.log(response);
            
            this.setState({ authenticated: response.data.token });
            return true;
        } catch (err) {
            console.log(err.response);
            this.setState({ errMsg: 'Email or password are incorrect' });
            return false;
        }
    }

    render() {
        return (
            <div>
                <h1>Sign in</h1>
                <AdvancedForm email="" password="" customSubmit={(email, password) => this.handler(email, password)}/>
                {this.state.errMsg}
                <br/>
                {this.state.authenticated}
            </div>
        )
    }
}

export default Signin;