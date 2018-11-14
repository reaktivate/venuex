import styled, { css } from 'styled-components';

const Summary = styled.div`
  padding: 0 23px 10px 23px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  span:first-child{
    text-align: center;
    margin-bottom: 11px;
    font-size: 15px;
    font-weight: 600;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: -0.3px;
    color: #b0b0b0;
  }
  span:last-child{
    font-family: Lora;
    font-size: 46px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1;
    letter-spacing: -0.9px;
    color: #181818;
  }
  ${props => props.color === 'light_gray' && css`
    &>span:first-child{
      color: #b0b0b0;
    }
  `}
  ${props => props.color === 'green' && css`
    &>span:first-child{
      color: #2cb070;
    }
  `}
  ${props => props.color === 'red' && css`
    span:first-child{
      color: #c02026;
    }
  `}
  ${props => props.color === 'yellow' && css`
    span:first-child{
      color: #f9cc4f;
    }
  `}
  ${props => props.color === 'gray' && css`
    span:first-child{
      color: #888888;
    }
  `}
}
@media screen and (max-width: 1250px){
  padding: 0 10px 10px 10px;
  margin-bottom: 10px;
}
`;

export default ({ name, count, color }) => (
  <Summary color={color}>
    <span>{name}</span>
    <span>{count}</span>
  </Summary>
);