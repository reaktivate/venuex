import React from 'react';
import { Form, FastField } from 'formik';
import * as Yup from 'yup';
import { Prompt } from 'react-router-dom';
import withForm from '@venuex/web/ui/hocs/withForm';
import FormPropTypes from '@venuex/web/ui/types/Form';
import Input from '@venuex/web/ui/elements/form/Input';

const initialValues = {
  name: ''
};

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Required')
});

const EventForm = ({ dirty, isSubmitting }) => (
  <Form>
    <FastField label="Event Name:" type="text" name="name" component={Input} />
    <button type="submit" disabled={isSubmitting}>
      Submit
    </button>
    <Prompt
      when={dirty || isSubmitting}
      message={() => `You have unsaved form data, are you sure you want to leave?`}
    />
  </Form>
);

EventForm.propTypes = {
  ...FormPropTypes
};

export default withForm({
  initialValues,
  validationSchema
})(EventForm);
