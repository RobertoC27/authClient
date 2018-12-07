import React from 'react';
import { Formik } from 'formik';
import './MyForm.css';

const myForm = () => {
    return (
        <div>

            <h1>My Form</h1>
            <Formik
                initialValues={{ email: 'your@mail.com', pass: 'skjn' }}
                onSubmit={(values, actions) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        actions.setSubmitting(false);
                    }, 1000);
                }}
                render={props => (
                    <form>
                        <label htmlFor="email">Email</label>
                        <input className="field-input" type="email" onChange={props.handleChange}
                            onBlur={props.handleBlur}
                            value={props.values.name}
                            id="email" />
                            <label htmlFor="pass">Password</label>
                        <input className="field-input" type="password" onChange={props.handleChange}
                            onBlur={props.handleBlur}
                            value={props.values.name}
                            id="pass" />
                        {props.errors.name && <div id="feedback">{props.errors.name}</div>}
                    </form>
                )}
            />
        </div>
    );
}

export default myForm;

{/* <form onSubmit={props.handleSubmit}>
                    <input
                        type="em"
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        value={props.values.name}
                        name="name"
                    />
                    {props.errors.name && <div id="feedback">{props.errors.name}</div>}
                    <button type="submit">Submit</button>
                </form> */}