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
  color: #888888;
  padding-left: 27px;

  &.permissions {
    justify-content: center;
  }

  &.permissions svg {
    margin-right: 5px;
    margin-left: 5px;
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
        <Column style={{ width: '20%' }}>{data.clientName}</Column>
        <Column style={{ width: '20%' }}>{data.name}</Column>
        <Column style={{ width: '20%' }}>{data.ceremonyKind}</Column>
        <Column style={{ width: '20%' }}>{data.actualGuests}</Column>
        <Column style={{ width: '20%' }}>{data.start.format('MMM DD')}</Column>

        <Column style={{ width: '20%' }}>
          <LazyUserName user={data.owner} />
        </Column>
      </Row>
    );
  }
}

export default BillingTableRow;
