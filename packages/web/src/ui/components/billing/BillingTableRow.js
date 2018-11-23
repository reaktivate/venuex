import React, { Component } from 'react';
import styled from 'styled-components';
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
  height: 100%;
  display: flex;
  justify-content: left;
  align-items: center;
  font-size: 15px;
  font-weight: 600;
  letter-spacing: 0.3px;
  color: #222222;
  padding-left: 27px;

  &.guests {
    justify-content: center;
  }

  &.date {
    color: #888888;
  }
`;

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
        <Column style={{ width: '15%' }}>{data.clientName}</Column>
        <Column style={{ width: '20%' }}>{data.name}</Column>
        <Column style={{ width: '120px' }}>{data.ceremonyKind}</Column>
        <Column className="guests" style={{ width: '65px' }}>
          {data.actualGuests}
        </Column>
        <Column className="date" style={{ width: '104px' }}>
          {data.start.format('MM/DD/Y')}
        </Column>

        <Column style={{ width: '20%' }}>
          <LazyUserName user={data.owner} />
        </Column>
      </Row>
    );
  }
}

export default BillingTableRow;
