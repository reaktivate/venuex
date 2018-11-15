import styled, { css } from 'styled-components';
import propTypes from 'prop-types';

const Button = styled.div`
  max-width: 180px;
  cursor: pointer;
  min-height: 50px;
  padding: 10px 30px 10px 20px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  position: relative;
  filter: grayscale(100%);
  transition-timing-function: ease-in;
  transition: .2s filter;
  user-select: none;
  text-transform: uppercase;
  &:after{
    content: '';
    right: 4px;
    position: absolute;
    width: 4px;
    height: 100%;
    background-color: transparent;
    transition-timing-function: ease-in;
    transition: .2s background-color;
  }
  &:hover{
    &:after{
      background-color: #c0b69b;
    }
  }
  ${props => props.active && css`
    filter: grayscale(0%);
    &:after{
      background-color: #c0b69b; 
    }
  `}
}
`;
const Name = styled.span`
  margin-left: 10px;
  font-family: Montserrat;
  font-size: 11px;
  font-weight: 400;
  letter-spacing: -0.1px;
  color: #c0b69b;
`;
const ButtonRender = ({ text, children, active, handleClick }) => (
  <Button active={active} onClick={handleClick}>
    {children}
    <Name>{text}</Name>
  </Button>
);
ButtonRender.propTypes = {
  text: propTypes.string.isRequired,
  handleClick: propTypes.func.isRequired,
  children: propTypes.element.isRequired,
  active: propTypes.bool,
};

export default ButtonRender;