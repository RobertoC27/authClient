import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const advancedForm = (props) => {
  return (
    <Formik
      initialValues={{
        email: props.email || '',
        password: props.password || '',
        endpoint: props.endpoint || ''
      }}
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
        <Form>
          <ErrorMessage name="email" component="div" />
          <Field type="email" name="email" placeholder="Email" />
          {props.errors.password && props.touched.password && <div>{props.errors.password}</div>}
          <Field type="password" name="password" placeholder="Password" />
          <button type="submit">Submit</button>
        </Form>
      )}
    />
  )
}
// A component is changing an uncontrolled input of type email to be controlled
// A component is changing an uncontrolledd
export default advancedForm;
