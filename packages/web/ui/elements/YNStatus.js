import styled from 'styled-components';
import propTypes from 'prop-types';

const Status = styled.div`
  display: inline-flex;
  color: #888888;
  font-family: Montserrat;
  font-weight: 100;
`;
const TextElement = styled.span`
  display: inline-block;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 400;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #888888;
`;
const YesElement = styled(TextElement)`
  color: ${props => (props.status)?"#2cb070":'#888888'};
  margin-right: 7px;
  position: relative;
  &:after{
    content: '';
    position: absolute;
    display: block;
    right: -8px;
    top: 0%;
    width: 1px;
    height: 90%;
    transform: rotate(15deg);
    background-color: #888888;
    opacity: .2;
  }
`;
const NoElement = styled(TextElement)`
  color: ${props => (!props.status)?"#c02026":'#888888'};
  margin-left: 7px;
`;
const StatusRender = ({ status }) => (
  <Status>
    <YesElement status={status}>Y</YesElement>
    <NoElement status={status}>N</NoElement>
  </Status>
)
StatusRender.propTypes = {
  status: propTypes.bool.isRequired,
};

export default StatusRender;