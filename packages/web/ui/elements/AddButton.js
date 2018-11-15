import React from 'react';
import styled, { css } from 'styled-components';
import PlusIcon from 'ui/icons/Plus';

const AddIcon = styled(PlusIcon)`
  height: 17px;
  width: 17px;
`;

const AddButton = styled.div(
  css`
    height: 50px;
    width: 50px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 2px 2px 0 rgba(125, 125, 125, 0.2);
    cursor: pointer;
    background-color: ${(props) =>
      (props.theme && props.theme.colors && props.theme.colors.primary) || '#FFF'};
  `
);

export default (props) => (
  <AddButton {...props}>
    <AddIcon />
  </AddButton>
);
