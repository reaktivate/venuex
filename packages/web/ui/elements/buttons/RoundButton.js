import styled, {css} from 'styled-components';
import propTypes from 'prop-types';

const Button = styled.div`
  user-select: none;
  cursor: pointer;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  border: 0;
  position: relative;
  &:focus,
  &:active {
    outline: none;
    border: 0;
  }
  background-color: #c0b69b;
  box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
  transition-timing-function: ease-in;
  transition: 0.2s box-shadow;
  &:hover {
    box-shadow: 0 0 10px 0 rgba(151, 134, 89, 0.5);
  }
  img,
  svg {
    max-width: 90%;
    height: auto;
  }
  ${props => props.type === "white" && css`
    box-shadow: 0 0 2px 0 rgba(125, 125, 125, 0.2);
    background-color: #ffffff;
  `}
  ${props => props.noti && css`
    box-shadow: 0 0 2px 0 rgba(125, 125, 125, 0.2);
    background-color: #ffffff;
    &:after{
      content: '';
      position: absolute;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      top: 16px;
      right: 14px;
      background-color: #c02026;
    }
  `}
`;

export const NotificationButton = ({ children, handleClick, noti }) => (
  <Button noti={noti} onClick={handleClick} type="white">
    {children}
  </Button>
)
NotificationButton.propTypes = {
  handleClick: propTypes.func.isRequired,
  children: propTypes.element.isRequired,
  noti: propTypes.bool.isRequired,
};

const ButtonRender = ({ children, handleClick }) => (
  <Button onClick={handleClick} type="default">
    {children}
  </Button>
)

ButtonRender.propTypes = {
  handleClick: propTypes.func.isRequired,
  children: propTypes.element.isRequired,
};

export default ButtonRender;