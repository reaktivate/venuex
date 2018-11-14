import React from 'react';
import styled, { css } from 'styled-components';

const Button = styled.button`
  height: 50px;
  padding: 0px 30px;
  box-shadow: 0 2px 4px 0 rgba(125, 125, 125, 0.2);
  border: solid 1px #ededed;
  font-size: 12px;
  font-weight: 800;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  color: #7d7d7d;
  text-transform: uppercase;
  cursor: pointer;
  white-space: nowrap;
`;

const SuccessButton = styled(Button)`
  background-color: #2cb070;
  color: #fff;
`;

const PrimaryButton = styled(Button)`
  ${(props) =>
    props.theme.colors &&
    props.theme.colors.primary &&
    css`
      background-color: ${props.theme.colors.primary};
      border: solid 1px ${props.theme.colors.primary};
    `}
  color: #fff;
`;

const SmallButton = styled(Button)`
  padding: 0px 15px;
  height: 40px;
`;

const DangerButton = styled(Button)`
  color: #c02026;
`;

const WhiteBgButton = styled(Button)`
  background-color: #ffffff;
`;

const WhiteButton = styled(Button)`
  background-color: #ffffff;
  color: #fff;
  border: solid 1px #ededed;
`;

export default Button;

export {
  Button,
  SuccessButton,
  PrimaryButton,
  SmallButton,
  DangerButton,
  WhiteBgButton,
  WhiteButton
};
