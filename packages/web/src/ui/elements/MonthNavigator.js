import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import GenericPropTypes from '@venuex/web/ui/types/Generic';
import IconRight from '@venuex/web/ui/icons/CaretRight.js';
import IconLeft from '@venuex/web/ui/icons/CaretLeft.js';
import styled from 'styled-components';
import moment from 'moment';

const Container = styled.div`
  display: flex;
  font-size: 20px;
  color: #222222;
  align-items: center;
  justify-content: center;
  width: 100%;
  user-select: none;
`;

const Prev = styled(IconLeft)`
  width: 10px;
  height: 17px;
  cursor: pointer;
`;

const Next = styled(IconRight)`
  width: 10px;
  height: 17px;
  cursor: pointer;
`;

const Title = styled.div`
  font-family: Lora;
  font-size: 20px;
  width: 150px;
  text-align: center;
  margin-left: 25px;
  margin-right: 25px;
`;

class MonthNavigator extends PureComponent {
  notifyChange(delta) {
    const { date, onChange } = this.props;

    if (onChange) {
      onChange(
        moment(date)
          .add(delta, 'month')
          .toDate()
      );
    }
  }

  handlePrevClick = () => {
    this.notifyChange(-1);
  };

  handleNextClick = () => {
    this.notifyChange(+1);
  };

  render() {
    const { date } = this.props;

    return (
      <Container>
        <Prev color="#c0b69b" onClick={this.handlePrevClick} />
        <Title>{moment(date).format('MMMM YYYY')}</Title>
        <Next color="#c0b69b" onClick={this.handleNextClick} />
      </Container>
    );
  }
}

MonthNavigator.propTypes = {
  onChange: PropTypes.func.isRequired,
  date: GenericPropTypes.date.isRequired
};

export default MonthNavigator;
