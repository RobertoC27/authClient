import React from 'react';
import { Formik } from 'formik';
import './MyForm.css';


const MyForm = ( props) => {
    return (
        <Formik
            initialValues={{ email:props.email, password:props.password, endpoint:props.endpoint }}
            onSubmit={async (values, actions) => {
                const success = await props.customSubmit(values);
                actions.setSubmitting(false);
                if(success)
                    actions.resetForm();
                
                

            }}
            render={props => (
                <form onSubmit={props.handleSubmit}>
                    <input type="email" name="email" placeholder="Email" value={props.values.email} onChange={props.handleChange} />
                    <input type="password" name="password" placeholder="Password" value={props.values.password} onChange={props.handleChange} />
                    <button type="submit">Submit</button>
                </form>
            )}
        />

    );

};

export default MyForm;
