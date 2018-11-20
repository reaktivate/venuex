import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import isString from 'lodash/isString';

const Container = styled.a(
  ({ theme }) => css`
    color: #fff;
    text-decoration: none;
    height: 70px;
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: 0px 20px;
    position: relative;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 12px;
    transition-duration: 0.3s;

    &:hover {
      background-color: ${theme.colors.primary}4D;
    }
  `,
  ({ active, theme }) => {
    if (active) {
      return css`
        background-color: ${theme.colors.primary}99;

        &:hover {
          background-color: ${theme.colors.primary}99;
        }

        &:before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          height: 100%;
          width: 5px;
          background-color: ${theme.colors.primary};
          box-shadow: 3px 0 4px 0 rgba(0, 0, 0, 0.1);
        }
      `;
    }
  }
);

const Icon = styled.span`
  display: inline-block;
  width: 24px;
  height: 24px;
  margin-right: 10px;
`;

const Image = styled.img`
  width: 24px;
  height: 24px;
`;

const Text = styled.span``;

const MenuItem = ({ href, icon, text, active }) => (
  <Container href={href} active={active}>
    <Fragment>
      <Icon>{isString(icon) ? <Image src={icon} /> : icon}</Icon>
      <Text>{text}</Text>
    </Fragment>
  </Container>
);

MenuItem.propTypes = {
  href: PropTypes.string,
  icon: PropTypes.node.isRequired,
  text: PropTypes.string.isRequired,
  active: PropTypes.bool
};

export default MenuItem;
