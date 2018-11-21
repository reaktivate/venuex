import React from 'react';
import styled from 'styled-components';

import PropTypes from 'prop-types';

const Container = styled.div`
  float: left;
`;

const ColorExample = styled.div`
  width: 30px;
  height: 20px;
  border-radius: 2px;
  float: left;
`;

const Label = styled.div`
  font-size: 12px;
  color: #888888;
  font-weight: 300;
  float: left;
  margin: 3px 5px;
  margin-right: 20px;
`;

const LegendItem = ({ color, label }) => (
  <Container>
    <ColorExample style={{ background: color }} />
    <Label>{label}</Label>
  </Container>
);

LegendItem.propTypes = {
  label: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired
};

export default LegendItem;
