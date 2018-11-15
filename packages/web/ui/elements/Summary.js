import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const colors = {
  'light_gray': '#b0b0b0',
  'green': '#2cb070',
  'red': '#c02026',
  'yellow': '#f9cc4f',
  'gray': '#888888',
};
const Summary = styled.div`
  max-width: 150px;
  padding: 0 23px 10px 23px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  ${props => props.mode === 'two-dots' && css`
    position: relative;
    &:after, &:before{

      content: '';
      right: 4px;
      position: absolute;
      width: 4px;
      border-radius: 50%;
      height: 4px;
      background-color: #b0b0b0;
    }
    &:after{
      top: 52px;
    }
    &:before{
      top: 45px;
    }
  `}
  ${props => props.mode === 'line-before' && css`
    border-left: 1px solid #b0b0b0;
  `}
}
@media screen and (max-width: 1250px){
  padding: 0 10px 10px 10px;
  margin-bottom: 10px;
}
`;
const Name = styled.span`
  font-family: 'Montserrat', sans-serif;
  text-align: center;
  margin-bottom: 11px;
  font-size: 15px;
  font-weight: 300;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: -0.3px;
  color: #b0b0b0;
  color: ${props => colors[props.color]};
`;
const Count = styled.span`
  font-family: 'Lora';
  font-size: 46px;
  font-weight: 400;
  font-style: normal;
  font-stretch: normal;
  line-height: 1;
  letter-spacing: -0.9px;
  color: #181818;
`;
const SummaryRender = ({ name, count, color, mode }) => (
  <Summary mode={mode}>
    <Name color={color}>{name}</Name>
    <Count>{count}</Count>
  </Summary>
);
SummaryRender.PropTypes = {
  name: PropTypes.string.isRequired,
  count: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  mode: PropTypes.string,
};

export default SummaryRender;