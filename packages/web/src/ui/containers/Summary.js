import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledSummary = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 25px 30px 14px 7px;
  border-radius: 2px;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  max-width: 100%;
  width: 100%;
  box-sizing: border-box;
  margin: 20px auto;
  align-items: center;
`;

class Summary extends Component {
  render() {
    const { children } = this.props;

    return <StyledSummary>{children}</StyledSummary>;
  }
}
Summary.propTypes = {
  children: PropTypes.element.isRequire
};
export default Summary;
