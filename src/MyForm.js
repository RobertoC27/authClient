import React, { Component } from 'react';
import { Formik } from 'formik';
import axios from 'axios';
import './MyForm.css';


class MyForm extends Component {
    state = {}

    sendForm = async ({ email, password }) => {
        this.setState({errMsg: null, authenticated: null});
        try{
            const response = await axios.post('http://35.165.129.25:3090/signup', { email, password });
            this.setState({authenticated: response.data.token});
        }catch(err) {
            console.log(err.response);
            
            this.setState({errMsg: err.response.data.error});
        }
        
    }
    
    render() {
        return (
            <div>
                <h1>{this.props.title} details</h1>
                <Formik
                    // initialValues={{ email: 'your@mail.com', password: '' }}
                    onSubmit={(values, actions) => {
                        // actions.setSubmitting(false);
                        console.log(values);
                        this.sendForm(values);
                    }}
                    render={props => (
                        <form onSubmit={props.handleSubmit}>
                            <label htmlFor="email">Email</label>
                            <input className="field-input" type="email" onChange={props.handleChange}
                                onBlur={props.handleBlur}
                                value={props.values.name}
                                id="email" />
                            <label htmlFor="password">Password</label>
                            <input className="field-input" type="password" onChange={props.handleChange}
                                onBlur={props.handleBlur}
                                value={props.values.name}
                                id="password" />
                            {props.errors.name && <div id="feedback">{props.errors.name}</div>}
                            <div>{this.state.authenticated || this.state.errMsg}</div>
                            <button type="submit">Submit</button>
                        </form>
                    )}
                />
            </div>
        );
    }
}

export default MyForm;
