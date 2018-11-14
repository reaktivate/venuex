import React from 'react';
import styled from 'styled-components';
import IconRight from 'ui/icons/CaretRight.js';
import IconLeft from 'ui/icons/CaretLeft.js';

const MonthPicker = styled.div`
  display: flex;
  font-size: 20px;
  color: #222222;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const CalTitle = styled.div`
  font-family: Lora;
  font-size: 20px;
  width: 150px;
  text-align: center;
`;

const MonthPickerRender = ({ onPreviousMonth, onNextMonth, date }) => (
  <MonthPicker>
    <IconLeft color="black" onClick={onPreviousMonth} />
    <CalTitle>{date.format('MMMM YYYY')}</CalTitle>
    <IconRight color="black" onClick={onNextMonth} />
  </MonthPicker>
);

export default MonthPickerRender;
