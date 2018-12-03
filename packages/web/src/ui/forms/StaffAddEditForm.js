import React from 'react';
import { Form, FastField } from 'formik';
import * as Yup from 'yup';
import { Prompt } from 'react-router-dom';
import styled from 'styled-components';
import withForm from '@venuex/web/ui/hocs/withForm';
import FormPropTypes from '@venuex/web/ui/types/Form';
import Input from '@venuex/web/ui/elements/form/Input';
import Checkbox from '@venuex/web/ui/elements/form/Checkbox';
import FormField from '@venuex/web/ui/elements/form/FormField';
import Button from '@venuex/web/ui/elements/buttons/Button';

const Wrap = styled.div`
  padding: 25px;
`;

const SubmitButton = styled(Button)`
  width: 100%;
`;

const initialValues = {
  fullName: '',
  email: '',
  createAndEditEvents: false,
  deleteEvents: false,
  manageStaffPermissions: false,
  viewBilling: false,
  viewEventsOnly: false,
  phoneNumber: ''
};

const validationSchema = Yup.object().shape({
  fullName: Yup.string().required('Required'),
  email: Yup.string()
    .email()
    .required('Required')
});

const FormCheckbox = (props) => {
  const { name } = props.field;
  const { values, setFieldValue } = props.form;

  return (
    <React.Fragment>
      <FormField {...props}>
        <Checkbox
          checked={values[name]}
          onCheck={() => {
            setFieldValue(name, true);
          }}
          onUncheck={() => {
            setFieldValue(name, false);
          }}
        />
      </FormField>
    </React.Fragment>
  );
};

const StaffAddEditForm = ({ isSubmitting, dirty }) => (
  <Wrap>
    <Form>
      <FastField label="Full Name:" type="text" name="fullName" component={Input} />
      <FastField label="Email:" type="text" name="email" component={Input} />
      <FastField label="Phone Number:" type="text" name="phoneNumber" component={Input} />
      <FastField
        label="Create And Edit Events"
        name="createAndEditEvents"
        component={FormCheckbox}
      />
      <FastField label="Delete Events" name="deleteEvents" component={FormCheckbox} />
      <FastField
        label="Manage Staff Permissions"
        name="manageStaffPermissions"
        component={FormCheckbox}
      />
      <FastField label="View Billing" name="viewBilling" component={FormCheckbox} />

      <FastField label="View Events Only" name="viewEventsOnly" component={FormCheckbox} />

      <SubmitButton type="submit">Save</SubmitButton>
      <Prompt
        when={dirty || isSubmitting}
        message={() => `You have unsaved form data, are you sure you want to leave?`}
      />
    </Form>
  </Wrap>
);

StaffAddEditForm.propTypes = {
  ...FormPropTypes
};

export default withForm({
  initialValues,
  validationSchema
})(StaffAddEditForm);
