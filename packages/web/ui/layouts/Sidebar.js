import React, { PureComponent, Fragment } from 'react';
import Link from '@venuex/web/ui/elements/Link';
import styled, { css } from 'styled-components';
import calendarWhiteIcon from '@venuex/web/ui/assets/calendar-white.svg';
import peopleWhiteIcon from '@venuex/web/ui/assets/people-white.svg';
import billingWhiteIcon from '@venuex/web/ui/assets/bill-white.svg';

const Container = styled.div`
  width: 226px;
  height: 100%;
  background-color: #000000;
  color: #fff;
`;

const Item = styled(Link)`
  color: #fff;
  text-decoration: none;
  height: 70px;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 0px 20px;
  position: relative;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 12px;
  transition-duration: 0.3s;

  &:hover {
    background-color: ${(props) => props.theme.colors.primary}4D;
  }

  ${(props) =>
    props.isActive &&
    css`
      background-color: ${(props) => props.theme.colors.primary}99;

      &:hover {
        background-color: ${(props) => props.theme.colors.primary}99;
      }

      &:before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        height: 100%;
        width: 5px;
        background-color: ${(props) => props.theme.colors.primary};
        box-shadow: 3px 0 4px 0 rgba(0, 0, 0, 0.1);
      }
    `}
`;

const ItemIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 10px;
`;

class Sidebar extends PureComponent {
  render() {
    const { match } = this.props;

    return (
      <Container>
        <div>
          <Item isActive={match.path.indexOf('/events') !== -1} to="venue.events">
            <Fragment>
              <ItemIcon src={calendarWhiteIcon} />
              <div>Events overview</div>
            </Fragment>
          </Item>
          <Item isActive={match.path.indexOf('/managestaff') !== -1} to="venue.managestaff">
            <Fragment>
              <ItemIcon src={peopleWhiteIcon} />
              <div>Manage Staff</div>
            </Fragment>
          </Item>
          <Item isActive={match.path.indexOf('/billing') !== -1} to="venue.billing">
            <Fragment>
              <ItemIcon src={billingWhiteIcon} />
              <div>Billing</div>
            </Fragment>
          </Item>
        </div>
      </Container>
    );
  }
}

export default Sidebar;
