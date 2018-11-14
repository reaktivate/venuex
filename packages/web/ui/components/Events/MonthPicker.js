import React from 'react';
import styled from 'styled-components';
import rightArrowIcon, { default as leftArrowIcon } from '*.svg';

const MonthPicker = styled.div`
  display: flex;
  font-size: 20px;
  color: #222222;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const ArrowIcon = styled.img`
  height: 17px;
  object-fit: contain;
  margin: 0px 20px;
  cursor: pointer;
`;

const CalTitle = styled.div`
  font-family: Lora;
  font-size: 20px;
  width: 150px;
  text-align: center;
`;

const MonthPickerRender = ({ onPreviousMonth, onNextMonth, date }) => (
  <MonthPicker>
    <ArrowIcon src={leftArrowIcon} onClick={onPreviousMonth} />
    <CalTitle>{date.format('MMMM YYYY')}</CalTitle>
    <ArrowIcon src={rightArrowIcon} onClick={onNextMonth} />
  </MonthPicker>
);

export default MonthPickerRender;
