import styled from 'styled-components';
import propTypes from 'prop-types';
import Crown from '../../icons/Crown.js';

const Button = styled.button`
  border: 0;
  outline: 0;
  min-width: 68px;
  padding: 1px 8px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  font-size: 10px;
  font-weight: bold;
  letter-spacing: -0.1px;
  text-align: center;
  color: ${(props) => (props.mode === 'unassign' ? '#c02026' : '#ffffff')};
  text-transform: uppercase
  box-shadow: 0px 0px 0px 0 rgba(0, 0, 0, 0.2);
  transition-timing-function: ease-in;
  transition: 0.4s box-shadow;
  text-transform: uppercase;
  cursor: pointer;
  background-color: ${(props) => (props.mode === 'unassign' ? '#ffffff' : '#7D7D7D')};
  &:focus{
    outline: none;
    border: 0;
  }
  &:hover{
    box-shadow: 0px 0px 10px 0 ${(props) => (props.mode === 'unassign' ? '#c02026' : '#7D7D7D')};
  }
`;
const Icon = styled(Crown)`
  margin-right: 2px;
  max-width: 17px;
  max-height: 100%;
`;
const ButtonRender = ({ handleClick, mode, text }) => (
  <Button onClick={handleClick} mode={mode}>
    {mode === 'owner' ? <Icon color="#ffffff" /> : ''} {text}
  </Button>
);

ButtonRender.propTypes = {
  handleClick: propTypes.func.isRequired,
  text: propTypes.string.isRequired,
  mode: propTypes.oneOf(['assign', 'owner', 'unassign']).isRequired
};

export default ButtonRender;
