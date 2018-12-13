import React from 'react';
import { Formik, Form, Field } from 'formik';

const advancedForm = (props) => {
    return (
        <Formik
            
            onSubmit={async (values, actions) => {
                const success = await props.customSubmit(values);
                actions.setSubmitting(false);
                
                // Esto por alguna razon da un error 
                // if (success)
                //     actions.resetForm();
            }}
            render={props => (
                <Form>
                    <Field type="email" name="email" placeholder="Email" />
                    <Field type="password" name="password" placeholder="Password" />
                    <button type="submit">Submit</button>
                </Form>
            )}
        />
    )
}

export default advancedForm;
