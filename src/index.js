import React from 'react';
import ReactDOM from 'react-dom';
import { Formik, Field, Form } from 'formik';

const validate = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  return errors;
};

function OnSubmitModalExample() {
  const handleInValidForm = (errors) => alert(JSON.stringify(errors, null, 2));

  const alertSuccess = (values) =>
    alert(
      `Wow, form submitted with values: ${JSON.stringify(values, null, 2)}`
    );

  return (
    <div>
      <h1>Sign Up</h1>
      <Formik
        validate={validate}
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
        }}
        onSubmit={alertSuccess}
      >
        {({ isValid, errors, handleSubmit }) => (
          <Form
            onSubmit={(formEvent) => {
              if (!isValid) handleInValidForm(errors);
              handleSubmit(formEvent);
            }}
          >
            <label htmlFor="firstName">First Name</label>
            <Field name="firstName" placeholder="Jane" />

            <label htmlFor="lastName">Last Name</label>
            <Field name="lastName" placeholder="Doe" />

            <label htmlFor="email">Email</label>
            <Field name="email" placeholder="jane@acme.com" type="email" />

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

ReactDOM.render(<OnSubmitModalExample />, document.getElementById('root'));
