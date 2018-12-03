import React from 'react';
import PropTypes from 'prop-types';
import { ErrorMessage } from 'formik';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  font-weight: normal;
  align-items: flex-start;
  padding: 15px 0px;
`;

const Label = styled.div`
  color: #7d7d7d;
  padding-right: 15px;
  font-size: 15px;
  font-weight: 300;
  letter-spacing: -0.3px;
  min-width: 100px;
  box-sizing: border-box;
  white-space: nowrap;
`;

const Input = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const ErrorText = styled.div`
  font-weight: 300;
  letter-spacing: -0.2px;
  color: #c02026;
  font-size: 12px;
  position: absolute;
  bottom: 100%;
`;

const FormField = ({ form: { touched, errors }, field: { name }, label, children }) => (
  <Container className={touched[name] && errors[name] && 'error'}>
    {label && <Label>{label}</Label>}
    <Input>
      <ErrorMessage name={name} component={ErrorText} />
      {children}
    </Input>
  </Container>
);

FormField.propTypes = {
  form: PropTypes.shape({
    values: PropTypes.object,
    touched: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    isValid: PropTypes.bool,
    isSubmitting: PropTypes.bool
  }).isRequired,
  field: PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    onChange: PropTypes.func,
    onBlur: PropTypes.func
  }).isRequired,
  label: PropTypes.string,
  children: PropTypes.element.isRequired
};

FormField.Container = Container;

export default FormField;
