import styled, { css } from 'styled-components';

const LegendItem = styled.div(
  (props) => css`
    margin-top: 15px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-left: 10px;

    font-family: 'Montserrat';
    font-size: 12px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: -0.2px;
    color: #888888;

    &:first-child {
      margin-left: 0px;
    }

    div {
      display: inline-block;
      background-color: ${props.theme.colors.primary + props.opacity};
      width: 30px;
      height: 20px;
      border-radius: 2px;
      margin-right: 5px;
    }
  `
);

export default LegendItem;
