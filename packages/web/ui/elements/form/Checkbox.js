import React from 'react';
import styled, { css } from 'styled-components';
import Checkmark from 'ui/icons/Checkmark';

import PropTypes from 'prop-types';

const Root = styled.div`
  border: solid 1px #b0b0b0;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  margin-right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  ${(props) =>
    props.checked &&
    css`
      border: solid 1px ${(props.theme.colors && props.theme.colors.primary) || '#c0b69b'};
      background-color: ${(props.theme.colors && props.theme.colors.primary) || '#c0b69b'};
    `};
`;

const StyledCheckmark = styled(Checkmark)`
  width: 10px;
  height: 10px;
  display: none;

  ${(props) =>
    props.checked &&
    css`
      display: block;
    `};
`;

const Checkbox = ({ checked, onCheck, onUncheck }) => (
  <Root checked={checked} onClick={() => (checked ? onUncheck() : onCheck())}>
    <StyledCheckmark color="white" checked={checked} />
  </Root>
);

Checkbox.PropTypes = {
  checked: PropTypes.bool,
  onUncheck: PropTypes.func,
  onCheck: PropTypes.func
};

export default Checkbox;
