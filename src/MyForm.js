import React from 'react';
import { Formik } from 'formik';
import './MyForm.css';
import * as Yup from 'yup';

const MyForm = ( props) => {
    return (
        <Formik
            initialValues={{ email:props.email, password:props.password, endpoint:props.endpoint }}
            onSubmit={async (values, actions) => {
                await props.customSubmit({...values, login:props.login});
                
                actions.setSubmitting(false);
                
            }}
            validationSchema={Yup.object().shape({
                email: Yup.string().email().required(),
                password: Yup.string().max(40).required()
            })}
            render={props => {
                return <form onSubmit={props.handleSubmit}>
                    {props.errors.email && props.touched.email && <div>{props.errors.email}</div>}
                    <input type="email" name="email" placeholder="Email" value={props.values.email} onChange={props.handleChange} onBlur={props.handleBlur}/>
                    {props.errors.password && props.touched.password && <div>{props.errors.password}</div>}
                    <input type="password" name="password" placeholder="Password" value={props.values.password} onChange={props.handleChange} onBlur={props.handleBlur}/>
                    <button type="submit">Submit</button>
                </form>
            }}
        />

    );

};

export default MyForm;
