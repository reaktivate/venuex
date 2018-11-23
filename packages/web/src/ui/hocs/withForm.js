import React from 'react';
import { Formik } from 'formik';
import merge from 'lodash/merge';

const withForm = (config) => (Component) => {
  const WithForm = (props) => {
    if (typeof config === 'function') {
      config = config(props);
    }

    const initialValues = merge({}, config.initialValues, props.initialValues);

    return (
      <Formik {...props} {...config} initialValues={initialValues}>
        {(formProps) => <Component {...formProps} />}
      </Formik>
    );
  };

  return WithForm;
};

export default withForm;
