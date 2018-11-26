import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Button = styled.button`
  user-select: none;
  cursor: pointer;
  min-height: 50px;
  min-width: 50px;
  max-height: 50px;
  max-width: 50px;
  padding: 0;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  border: 0;
  position: relative;
  &:focus,
  &:active {
    outline: none;
    border: 0;
  }
  box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
  transition-timing-function: ease-in;
  transition: 0.2s box-shadow;
  &:hover {
    box-shadow: 0 0 10px 0 rgba(151, 134, 89, 0.5);
  }
`;
const UserPhoto = styled.img`
  width: 100%;
`;

const UserButton = ({ photo, onClick, ...props }) => (
  <Button onClick={onClick} {...props}>
    <UserPhoto src={photo} />
  </Button>
);

UserButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  photo: PropTypes.string.isRequired
};

export default UserButton;
