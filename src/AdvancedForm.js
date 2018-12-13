import React from 'react';
import { Formik} from 'formik';
import * as Yup from 'yup';


const advancedForm = (props) => {
    return (
        <Formik
            initialValues={{ email: props.email, password: props.password, endpoint: props.endpoint }}
            onSubmit={async (values, actions) => {
                const success = await props.customSubmit(values);
                actions.setSubmitting(false);
                if (success)
                    actions.resetForm();
            }}
            validationSchema={Yup.object().shape({
                email: Yup.string().email().required(),
                password: Yup.string().min(5).max(40).required()
            })}
            render={props => (
                <form onSubmit={props.handleSubmit}>
                    {props.errors.email && props.touched.email && <div>{props.errors.email}</div>}
                    <input type="email" name="email" placeholder="Email" value={props.values.email} onChange={props.handleChange} onBlur={props.handleBlur} />
                    {props.errors.password && props.touched.password && <div>{props.errors.password}</div>}
                    <input type="password" name="password" placeholder="Password" value={props.values.password} onChange={props.handleChange} onBlur={props.handleBlur} />
                    <button type="submit">Submit</button>
                </form>
            )}
        />
    )
}
// A component is changing an uncontrolled input of type email to be controlled
// A component is changing an uncontrolledd
export default advancedForm;
