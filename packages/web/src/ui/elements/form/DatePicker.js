import React from 'react';
import styled, { css } from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import FormField from '@venuex/web/ui/elements/form/FormField';
import PropTypes from 'prop-types';

const DatePickerWrapper = styled.div`
  .react-datepicker {
    width: 312px;
    font-family: Montserrat;
    border: none;
    border-radius: 2px;
    box-shadow: 2px 2px 10px 0 rgba(0, 0, 0, 0.2);
    padding: 5px 10px;
    font-family: inherit;

    ${(props) =>
      props.showTimeSelect &&
      css`
        padding: 0px;
      `}
    &__month-container {
      width: 100%;
    }
    &__triangle {
      display: none;
    }
    &__header {
      background-color: #fff;
      border-bottom: none;
      padding: 0;
    }
    &__current-month {
      font-family: Lora;
      font-size: 17px;
      font-weight: 500;
      text-align: center;
      color: #000000;
      padding: 15px 0;
    }
    &__day {
      height: 28px;
      width: 28px;
      border-radius: 50%;
      font-size: 14px;
      font-weight: 300;
      text-align: center;
      color: #7d7d7d;
      margin: 2.5%;
      &:hover {
        border-radius: 50%;
      }
      &-name {
        height: 28px;
        width: 28px;
        font-size: 10px;
        font-weight: 300;
        text-align: center;
        color: #888888;
        text-transform: uppercase;
        margin: 2.5%;
        box-sizing: border-box;
      }
      &--outside-month {
        color: #b0b0b0;
      }
      &--keyboard-selected {
        background-color: #ffffff;
        border: 1px solid #7d7d7d;
        &:hover {
          background-color: #f0f0f0;
        }
      }
      &--today {
        background-color: #000000;
        color: #ffffff;
        border-color: #000000;
        &:hover {
          background-color: #000000;
        }
      }
    }

    &__navigation {
      width: 13px;
      height: 13px;
      border: 0;
      border-radius: 20%;
      border-top: 3px solid #c0b69b;
      top: 24px;
      &--next {
        border-right: 3px solid #c0b69b;
        transform: rotate(45deg);
        right: 34px;
      }
      &--previous {
        border-left: 3px solid #c0b69b;
        transform: rotate(-45deg);
        left: 30px;
      }
    }

    &__input-container {
      input {
        border: none;
        border-bottom: solid 1px #d8d8d8;

        ${(props) =>
          props.meta &&
          props.meta.error &&
          props.meta.touched &&
          css`
            border-bottom: solid 1px #c02026;
          `}

        &:focus {
          outline: 0;
          border-bottom: 1px solid #c0b69b;
        }
      }
    }
  }

  .react-datepicker__time-container
    .react-datepicker__time
    .react-datepicker__time-box
    ul.react-datepicker__time-list
    li.react-datepicker__time-list-item {
    padding: 0px;
  }

  .react-datepicker__time-list {
    padding: 0px;
  }

  .react-datepicker__time-container
    .react-datepicker__time
    .react-datepicker__time-box
    ul.react-datepicker__time-list {
    padding: 0px;
  }

  .react-datepicker__time-container
    .react-datepicker__time
    .react-datepicker__time-box
    ul.react-datepicker__time-list
    li.react-datepicker__time-list-item {
    padding: 15px 0px;

    &:hover {
      background-color: ${(props) =>
        (props.theme.colors && props.theme.colors.primary) || '3333'}33;
    }
  }

  ${(props) =>
    props.showTimeSelect &&
    css`
      input {
        width: 80px;
      }
    `}

  ${(props) =>
    props.width &&
    css`
      input {
        width: ${props.width};
      }
    `}
`;

const DatePickerElement = (props) => (
  <DatePickerWrapper {...props}>
    <DatePicker {...props} />
  </DatePickerWrapper>
);

const DatePickerRender = (props) => {
  const { onChange } = props;

  return (
    <FormField {...props}>
      <DatePickerElement {...props} onChange={onChange} placeholder="Date" />
    </FormField>
  );
};

DatePickerRender.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func
};

export default DatePickerRender;
