import React from 'react';
import styled from 'styled-components';
import RoundButton from '@venuex/web/ui/elements/RoundButton';
import PlusIcon from '@venuex/web/ui/icons/Plus';
import PropTypes from 'prop-types';

const AddIcon = styled(PlusIcon)`
  && {
    height: 16px;
    width: 16px;
    min-width: 30%;
  }
`;

const AddButton = (props) => (
  <RoundButton {...props}>
    <AddIcon />
  </RoundButton>
);

AddButton.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default AddButton;
