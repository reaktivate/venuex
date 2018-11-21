import styled from 'styled-components';
import propTypes from 'prop-types';

const Switcher = styled.button`
  width: 34px;
  height: 16px;
  border-radius: 12px;
  background-color: ${(props) => (props.active ? '#2cb070' : '#b0b0b0')};
  border: 0;
  outline: none;
  cursor: pointer;
  padding: 0;
  position: relative;
  transition-timing-function: ease-in;
  transition: 0.2s background-color;
`;
const Cicle = styled.i`
  display: block;
  transform: ${(props) => (props.active ? 'translate(18px)' : 'translate(0)')};
  border-radius: 50%;
  border: 1px solid ${(props) => (props.active ? '#2cb070' : '#b0b0b0')};
  width: 14px;
  height: 14px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.3);
  background-color: #ffffff;
  transition-timing-function: ease-in;
  transition: 0.2s all;
`;

const SwitcherRender = ({ active, handleClick }) => (
  <Switcher onClick={handleClick} active={active}>
    <Cicle active={active} />
  </Switcher>
);

SwitcherRender.propTypes = {
  handleClick: propTypes.func.isRequired,
  active: propTypes.bool.isRequired
};

export default SwitcherRender;
