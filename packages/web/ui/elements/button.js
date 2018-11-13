import React from 'react';
import GenericPropTypes from '../types/Generic';
import Tooltip from './Tooltip';
import styled from '../hoc/styled';
import toString from 'lodash/toString';

const StyledButton = styled('button')((theme) => ({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  padding: 0,
  margin: 0,
  // Remove grey highlight
  WebkitTapHighlightColor: theme.palette.common.transparent,
  // Reset default value
  backgroundColor: 'transparent',
  outline: 'none',
  border: 0,
  borderRadius: 0,
  cursor: 'pointer',
  userSelect: 'none',
  appearance: 'none',
  fontFamily: 'inherit',
  fontSize: '1em',
  textDecoration: 'none',
  color: 'inherit',
  transition: '.2s',
  '&::-moz-focus-inner': {
    // Remove Firefox dotted outline
    borderStyle: 'none'
  },
  '&[disabled]': {
    opacity: 0.5,
    cursor: 'default',
    color: 'inherit !important'
  },
  '& > span': {
    flex: 1
  }
}));

const Button = ({ title, ...props }) => {
  title = toString(title);

  const component = (
    <StyledButton {...props} />
  );

  if (title.length > 0) {
    return (
      <Tooltip
        title={title}
        size="small"
        delay={200}
        animateFill={false}
        sticky
        arrow
      >
        {component}
      </Tooltip>
    );
  }

  return component;
};

Button.propTypes = {
  title: GenericPropTypes.stringOrNumber
};

export const TransparentButton = styled(Button)({
  padding: '.25em 1em',
  fontSize: '1.26em',
  borderRadius: '.3em',
  lineHeight: '1.6em'
});

export const PrimaryButton = styled(TransparentButton)((theme) => ({
  background: theme.palette.button.primary.background,
  color: theme.palette.button.primary.text
}));

export const SecondaryButton = styled(TransparentButton)((theme) => ({
  background: theme.palette.button.secondary.background,
  color: theme.palette.button.secondary.text
}));

export const IconButton = styled(Button)((theme) => ({
  [theme.capabilities.hover]: {
    '&:hover': {
      color: theme.palette.common.white
    }
  },
  '& > i, & > svg, & > span': {
    flex: 1
  }
}));

export const LinkButton = styled(Button)((theme) => ({
  color: theme.palette.link.default,
  fontWeight: 700,
  [theme.capabilities.hover]: {
    '&:hover': {
      textDecoration: 'underline'
    }
  }
}));

export default Button;