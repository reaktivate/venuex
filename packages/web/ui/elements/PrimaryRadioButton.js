import styled, { css } from 'styled-components';
import CheckmarkImg from '../icons/Checkmark.js';

const RadioButton = styled.button`
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
export default ({ active }) => (
	<RadioButton active={active}>
		<CheckmarkImg color="#ffffff" />
	</RadioButton>
);