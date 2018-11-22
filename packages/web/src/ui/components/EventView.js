import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import RoundIcon from '@venuex/web/ui/elements/RoundIcon';
import Button from '@venuex/web/ui/elements/buttons/Button';
import Icon from '@venuex/web/ui/icons/ImportFile';

const Container = styled.div`
  display: flex;
  flex-flow: column;
  width: 580px;
  font-weight: normal;
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-flow: row;
  align-items: center;
  background-color: rgba(188, 172, 150, 0.4);
  height: 160px;
  flex: 1,
  font-family: Lora-Regular; 
  padding: 0 20px;
`;

const TitleBlock = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  padding-left: 20px;
`;

const Title = styled.div`
  font-size: 24px;
  color: #181818;
`;

const Date = styled.div`
  font-size: 14px;
  color: #7d7d7d;
`;

class Header extends Component {
  static propTypes = {
    event: PropTypes.object.isRequired
  };

  render() {
    const { event } = this.props;

    return (
      <HeaderContainer>
        <RoundIcon type="icon">
          <Icon color="#c0b69b" />
        </RoundIcon>

        <TitleBlock>
          <Title>{event.name}</Title>
          <Date>{event.start.format('LLL')}</Date>
        </TitleBlock>
      </HeaderContainer>
    );
  }
}

const ContentContainer = styled.div`
  width: 100%;
  padding: 30px 15px;
`;

const DetailsContainer = styled.div`
  display: flex;
  flex-flow: row;
  font-family: Montserrat-Regular,
  font-size: 15px;
`;
const DetailsName = styled.div`
  color: #7d7d7d;
  margin-right: 10px;
`;
const DetailsValue = styled.div`
  color: #222222;
`;

class DetailsLine extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string
  };

  render() {
    const { name, value } = this.props;

    return (
      <DetailsContainer>
        <DetailsName>{name}:</DetailsName>
        <DetailsValue>{value}</DetailsValue>
      </DetailsContainer>
    );
  }
}

class Content extends Component {
  static propTypes = {
    event: PropTypes.object.isRequired
  };

  render() {
    const { event } = this.props;

    return (
      <ContentContainer>
        <DetailsLine name="Consultant" value={event.consultant.name} />
        <DetailsLine name="Event Type" value={event.type} />
        <DetailsLine name="Start Time" value={event.start.format('LT')} />
        <DetailsLine name="End Time" value={event.end.format('LT')} />
      </ContentContainer>
    );
  }
}

class Footer extends Component {
  onDownloadSeatingChart = (e) => {
    console.log('seating chart');
  };

  onDelete = (e) => {
    console.log('delete');
  };

  onEdit = (e) => {
    console.log('edit');
  };

  render() {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          borderTop: 'solid 1px #d8d8d8',
          width: '100%'
        }}
      >
        <Button mode="whiteBg" onClick={this.onDownloadSeatingChart}>
          Download seating chart
        </Button>
        <Button mode="danger" onClick={this.onDelete}>
          Delete
        </Button>
        <Button mode="whiteBg" onClick={this.onEdit}>
          Edit
        </Button>
      </div>
    );
  }
}

class EventView extends Component {
  static propTypes = {
    event: PropTypes.object.isRequired
  };

  render() {
    const { event } = this.props;

    if (!event.consultant) event.consultant = { name: 'Ivan Drago' };

    return (
      <Container>
        <Header event={event} />
        <Content event={event} />
        <Footer />
      </Container>
    );
  }
}

export default EventView;
