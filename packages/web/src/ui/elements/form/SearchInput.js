import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import SearchIcon from '../../icons/Search.js';

const SearchBox = styled.div`
  display: flex;
  width: 250px;
  height: 48px;
  border-radius: 25px;
  box-shadow: 0 2px 4px 0 rgba(125, 125, 125, 0.2);
  background-color: #ffffff;
  border: 1px solid #ededed;
  position: relative;
  align-items: center;
  input {
    z-index: 2;
    position: relative;
    border: none;
    outline: none;
    padding: 0 35px 0 18px;
    box-sizing: border-box;
    border-radius: 25px;
    height: 100%;
    width: 100%;
    background-color: transparent;
    font-family: 'Montserrat', sans-serif;
    font-size: 15px;
    font-weight: 300;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: -0.1px;
    color: #7c7a7a;
    &::-webkit-input-placeholder {
      font-family: 'Montserrat', sans-serif;
      font-size: 15px;
      font-weight: 300;
      font-style: normal;
      font-stretch: normal;
      line-height: normal;
      letter-spacing: -0.1px;
      color: #b0b0b0;
    }
    &::-moz-placeholder {
      font-family: 'Montserrat', sans-serif;
      font-size: 15px;
      font-weight: 300;
      font-style: normal;
      font-stretch: normal;
      line-height: normal;
      letter-spacing: -0.1px;
      color: #b0b0b0;
    }
    &:-ms-input-placeholder {
      font-family: 'Montserrat', sans-serif;
      font-size: 15px;
      font-weight: 300;
      font-style: normal;
      font-stretch: normal;
      line-height: normal;
      letter-spacing: -0.1px;
      color: #b0b0b0;
    }
    &:-moz-placeholder {
      font-family: 'Montserrat', sans-serif;
      font-size: 15px;
      font-weight: 300;
      font-style: normal;
      font-stretch: normal;
      line-height: normal;
      letter-spacing: -0.1px;
      color: #b0b0b0;
    }
  }
  img,
  svg {
    position: absolute;
    z-index: 1;
    right: 15px;
    max-width: 14px;
    width: 100%;
  }
`;
const SearchInput = ({ children }) => (
  <SearchBox>
    {children}
    <SearchIcon color="#b0b0b0" />
  </SearchBox>
);

SearchInput.propTypes = {
  children: PropTypes.element.isRequired
};

export default SearchInput;
