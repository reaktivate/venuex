import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const colors = {
	'gray': '#b0b0b0',
	'green': '#2cb070',
	'red': '#c02026',
	'yellow': '#f9cc4f',
};
const RadioButton = styled.button`
	max-width: 300px;
	background-color: transparent;
	border: none;
	outline: none;
	position: relative;
	width: 100%;
	height: 52px;
	padding: 0 5px 0 63px;
	text-align: left;
	font-size: 15px;
	font-weight: 600;
	font-style: normal;
	font-stretch: normal;
	line-height: normal;
	letter-spacing: -0.3px;
	color: #222222;
	cursor: pointer;
	&:focus, &:active{
		background-color: transparent;
		border: none;
		outline: none;
	}
	&:after, &:before{
		content: '';
		display: block;
		position: absolute;
		border-radius: 50%;
	}
	&:after{
		top: 19px;
		left: 22px;
		width: 14px;
		height: 14px;
		background-color: transparent;
		transition-timing-function: ease-in;
		transition: 0.4s background-color;
	}
	&:before{
		top: 16px;
		left: 19px;
		border: 2px solid ${props => colors[props.color]};
		width: 16px;
		height: 16px;
	}
  &:hover{
		&:after{
			opacity: 0.5;
			background-color: ${props => colors[props.color]};
		}
  }
  ${props => props.active && css`
		&:after{
			opacity: 1!important;
			background-color: ${colors[props.color]};
		}
  `}
`;

const RadioButtonRender = ({ active, handleClick, color, children }) => (
	<RadioButton active={active} color={color} onClick={handleClick}>
		{children}
	</RadioButton>
)
RadioButtonRender.PropTypes = {
	handleClick: PropTypes.func.isRequired,
	children: PropTypes.element.isRequired,
	active: PropTypes.bool,
	color: PropTypes.string,
};

export default RadioButtonRender;