import React from 'react';
import styled from 'styled-components';
import IconRight from 'ui/icons/CaretRight.js';
import IconLeft from 'ui/icons/CaretLeft.js';

import PropTypes from 'prop-types';
import moment from 'moment';

const MonthPicker = styled.div`
  display: flex;
  font-size: 20px;
  color: #222222;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const StyledIconLeft = styled(IconLeft)`
  width: 10px;
  height: 17px;
`;

const StyledIconRight = styled(IconRight)`
  width: 10px;
  height: 17px;
`;

const CalTitle = styled.div`
  font-family: Lora;
  font-size: 20px;
  width: 150px;
  text-align: center;
  margin-left: 25px;
  margin-right: 25px;
`;

const MonthPickerRender = ({ onPreviousMonth, onNextMonth, date }) => (
  <MonthPicker>
    <StyledIconLeft color="#c0b69b" onClick={onPreviousMonth} />
    <CalTitle>{date.format('MMMM YYYY')}</CalTitle>
    <StyledIconRight color="#c0b69b" onClick={onNextMonth} />
  </MonthPicker>
);

MonthPickerRender.propTypes = {
  onPreviousMonth: PropTypes.func.isRequired,
  onNextMonth: PropTypes.func.isRequired,
  date: PropTypes.instanceOf(moment)
};

export default MonthPickerRender;
