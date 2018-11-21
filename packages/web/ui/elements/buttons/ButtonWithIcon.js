import styled, { css } from 'styled-components';
import propTypes from 'prop-types';
import CheckmarkImg from '../../icons/Checkmark.js';

const colors = {
  gray: 'rgba(176,176,176, 1)',
  green: 'rgba(44,176,112, 1)',
  red: 'rgba(192,32,38, 1)',
  yellow: 'rgba(249,204,79, 1)',
  gold: 'rgba(192,182,155, 1)',
  white: 'rgba(255,255,255, 1)'
};

const Button = styled.button`
	outline: none;
	border: 0;
	padding: 5px 20px;
	justify-content: center;
	display: flex;
	height: 50px;
	opacity: 0.4;
	border-radius: 4px;
	box-shadow: 0 2px 2px 0 rgba(125, 125, 125, 0.2);
	background-color: ${(props) => colors[props.buttonColor]};
	align-items: center;
	box-sizing: border-box;
	text-decoration: none;
	img, svg{
		max-width: 24px;
		height: auto;
		margin-right: 5px;
	}
	&:focus{
		border: 0;
		outline: none;
	}
	${(props) =>
    props.ready &&
    css`
		cursor: pointer;
		opacity: 1;
		transition: .2s box-shadow;
		&:hover{
			box-shadow: 0 0px 20px 0 rgba(192,182,155, 1);
		}
	`}
	${(props) =>
    props.mode === 'border' &&
    css`
    border: 1px solid 
      ${(props) =>
        colors[props.textColor]?colors[props.textColor]:'#ffffff'}!important;
	`}
`;

const Name = styled.span`
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  transition-timing-function: ease-in;
  transition: 0.2s opacity;
  color: ${(props) => (colors[props.textColor] ? colors[props.textColor] : '#ffffff')};
`;

const ButtonRender = ({ ready, children, text, buttonColor, textColor, mode,  handleClick}) => (
	<Button ready={ready} buttonColor={buttonColor} textColor={textColor} mode={mode} onClick={handleClick}>
		{children}
		<Name textColor={textColor}>{text}</Name>
	</Button>
);

ButtonRender.propTypes = {
	handleClick: propTypes.func.isRequired,
	text: propTypes.string.isRequired,
	children: propTypes.element.isRequired, 
	ready: propTypes.bool,
	grayscale: propTypes.bool,
	buttonColor: propTypes.string,
	textColor: propTypes.string,
	mode: propTypes.oneOf(['border']),
};

export default ButtonRender;
