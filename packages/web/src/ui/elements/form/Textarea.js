import React from 'react';
import styled, { css } from 'styled-components';
import FormField from '@venuex/web/ui/elements/form/FormField';

const StyledTextarea = styled.textarea`
  border: solid 1px #d8d8d8;
  border-radius: 2px;
  resize: none;
  width: 100%;
  color: #7d7d7d;
  font-size: 15px;
  font-weight: 300;

  &:focus {
    outline: 0;
    border: solid 1px ${(props) => props.theme.colors && props.theme.colors.primary};
  }

  ${(props) =>
    props.meta &&
    props.meta.error &&
    props.meta.touched &&
    css`
      border-bottom: solid 1px #c02026;
    `}
`;

const Textarea = (props) => {
  const { input } = props;

  return (
    <FormField {...props} alignItems="flex-start">
      <StyledTextarea {...props} {...input} rows={6} />
    </FormField>
  );
};

export default Textarea;
