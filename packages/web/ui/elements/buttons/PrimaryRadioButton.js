import styled, { css } from 'styled-components';
import propTypes from 'prop-types';
import CheckmarkImg from '../../icons/Checkmark.js';

const RadioButton = styled.button`
	outline: none;
	padding: 0;
	background-color: transparent;
	border: 1px solid #b0b0b0;
	width: 20px;
	height: 20px;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 50%;
  ${props => props.active && css`
		background-color: #c0b69b;
		border-color: #c0b69b;
  `}
  &>svg{
  	max-width: 10px;
  	max-height: 100%;
  }
`;
const RadioButtonRender = ({ active, handleClick }) => (
	<RadioButton active={active} onClick={handleClick}>
		<CheckmarkImg color="#ffffff" />
	</RadioButton>
)
RadioButtonRender.propTypes = {
	handleClick: propTypes.func.isRequired,
	active: propTypes.bool
};

export default RadioButtonRender;