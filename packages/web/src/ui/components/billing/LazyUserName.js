import React from 'react';
import { observer } from '@venuex/ddd/react';
import PropTypes from 'prop-types';
import RoundIcon from '@venuex/web/ui/elements/RoundIcon';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const Name = styled.span`
  margin-left: 10px;
  color: #222222;
`;

const LazyUserName = observer(({ user }) => (
  <Container>
    <RoundIcon size="40" type="photo">
      <img src={user.avatar} alt="avatar" />
    </RoundIcon>
    <Name>{user.fullName}</Name>
  </Container>
));

LazyUserName.propTypes = {
  user: PropTypes.object
};

export default LazyUserName;
