import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import UnstyledFilterIcon from '@venuex/web/ui/icons/Filter';

const ButtonWrap = styled.div`
  user-select: none;
  position: relative;
  display: inline-flex;
  align-items: center;
`;
const Button = styled.button(
  css`
    outline: none;
    border: 0;
    padding: 5px 30px 5px 15px;
    justify-content: center;
    display: flex;
    height: 50px;
    border-radius: 4px;
    box-shadow: 0 2px 2px 0 rgba(125, 125, 125, 0.2);
    align-items: center;
    box-sizing: border-box;
    text-decoration: none;
    border: 1px solid #c0b69b;
    color: #c0b69b;
    cursor: pointer;
    &:focus {
      outline: none;
    }
  `
);
const FilterIcon = styled(UnstyledFilterIcon)`
  margin-right: 3px;
`;
const CloseButton = styled.i`
  position: absolute;
  right: 10px;
  width: 20px;
  cursor: pointer;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:after,
  &:before {
    content: '';
    width: 12px;
    height: 2px;
    border-radius: 1px;
    background: #7d7d7d;
    position: absolute;
    transition: 0.3s background-color;
  }
  &:after {
    transform: rotate(45deg);
  }
  &:before {
    transform: rotate(-45deg);
  }
  &:hover {
    &:after,
    &:before {
      background-color: #c02026;
    }
  }
`;
const FilterText = styled.span`
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 400;
  text-align: center;
  color: #c0b69b;
`;

const FilterButton = ({ text, event, onClick, onClose }) => (
  <ButtonWrap>
    <Button onClick={onClick}>
      <FilterIcon color="#c0b69b" />
      <FilterText>{event.length ? text + ' : ' + event : text}</FilterText>
    </Button>
    {event.length ? <CloseButton onClick={onClose} /> : ''}
  </ButtonWrap>
);

FilterButton.defaultProps = {
  event: ''
};
FilterButton.propTypes = {
  event: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func,
  onClose: PropTypes.func
};

export default FilterButton;
