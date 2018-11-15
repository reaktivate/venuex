import React from 'react';
import styled from 'styled-components';
import RoundButton from 'ui/elements/RoundIconButton';
import PlusIcon from 'ui/icons/Plus';

const AddIcon = styled(PlusIcon)`
  height: 17px;
  width: 17px;
`;

export default (props) => (
  <RoundButton {...props}>
    <AddIcon />
  </RoundButton>
);
