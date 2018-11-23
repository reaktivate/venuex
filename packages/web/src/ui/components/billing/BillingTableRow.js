import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import LazyUserName from './LazyUserName.js';

const Row = styled.div`
  display: flex;
  width: 100%;
  height: 65px;
  border-bottom: 1px solid #ededed;
  transition-timing-function: ease-in;
  transition: 0.2s background-color;
  border-top: 1px solid #eeeeee;

  &:hover {
    background-color: #fafafa;

    & .staff-list-tools {
      display: flex;
    }
  }
`;

const Column = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: left;
  align-items: center;
  font-size: 15px;
  font-weight: 600;
  letter-spacing: 0.3px;
  color: #222222;
  padding: 0 10px;
  width: 100%;
  &.guests {
    justify-content: center;
  }

  &.date {
    color: #888888;
  }
`;
const ColumnText = styled.span((props) => {
  return css`
    font-size: 15px;
    font-weight: 300;
    letter-spacing: -0.3px;
    color: ${props.gray ? '#7d7d7d' : '#222222'};
  `;
});

class BillingTableRow extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
    selected: PropTypes.array.isRequired,
    rowCheckHandler: PropTypes.func,
    rowUncheckHandler: PropTypes.func,
    rowEditHandler: PropTypes.func,
    rowDeleteHandler: PropTypes.func
  };

  componentDidMount() {
    const {
      data: { owner }
    } = this.props;

    owner.load();
  }

  render() {
    const { data } = this.props;

    return (
      <Row>
        <Column
          style={{ maxWidth: 'calc((100% - 360px)/4)', paddingLeft: '20px', minWidth: '100px' }}
        >
          <ColumnText>{data.clientName}</ColumnText>
        </Column>
        <Column style={{ maxWidth: 'calc((100% - 360px)/3)', minWidth: '120px' }}>
          <ColumnText>{data.name}</ColumnText>
        </Column>
        <Column style={{ maxWidth: '140px' }}>
          <ColumnText>{data.ceremonyKind}</ColumnText>
        </Column>
        <Column className="guests" style={{ maxWidth: '90px', justifyContent: 'center' }}>
          <ColumnText>{data.actualGuests}</ColumnText>
        </Column>
        <Column className="date" style={{ maxWidth: '130px', justifyContent: 'center' }}>
          <ColumnText gray={true}>{data.start.format('MM/DD/Y')}</ColumnText>
        </Column>

        <Column style={{ maxWidth: 'calc((100% - 360px)/3)', minWidth: '120px' }}>
          <LazyUserName user={data.owner} />
        </Column>
      </Row>
    );
  }
}

export default BillingTableRow;
