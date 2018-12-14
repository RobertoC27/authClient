import React, { Component } from 'react';
import MyForm from './MyForm';
import axios from 'axios';
import { AuthConsumer } from './AuthProvider';

class Signin extends Component {
    state = {}

    handler = async ({ email, password, login }) => {
        this.setState({ errMsg: null, authenticated: null });
        
        try {
            const response = await axios.post('http://35.165.129.25:3090/signin', { email, password });
            // console.log(response);

            this.setState({ authenticated: response.data.token });
            login();
            this.props.history.push('/feature');
            
            
        } catch (err) {
            // console.log(err.response);
            this.setState({ errMsg: 'Email or password are incorrect' });
        }
        
    }

    render() {
        return (
            <div>
                <AuthConsumer>
                    {({ login }) => (
                        <div>
                            {/* <div onClick={login}>Click me to login!</div> */}
                            <h1>Sign in</h1>
                            <MyForm email="" password="" customSubmit={(email, password) => this.handler(email, password)} login={login} />
                            {this.state.errMsg}
                            <br />
                            {this.state.authenticated}
                        </div>
                    )}
                </AuthConsumer>
            </div>
        )
    }
}

export default Signin;