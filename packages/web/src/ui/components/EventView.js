import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import RoundIcon from '@venuex/web/ui/elements/RoundIcon';
import Button from '@venuex/web/ui/elements/buttons/Button';
import Icon from '@venuex/web/ui/icons/ImportFile';
import SideTabs from '@venuex/web/ui/components/SideTabs';
import LazyUserName from '@venuex/web/ui/components/billing/LazyUserName';
import CalendarIcon from '@venuex/web/ui/icons/Calendar';

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
  padding: 30px 20px;
`;

const Details = styled.div`
  padding: 0 40px;
  font-size: 15px;
`;
const DetailsLineContainer = styled.div`
  display: flex;
  flex-flow: row;
  height: 40px;
  align-items: center;
`;
const DetailsName = styled.div`
  color: #7d7d7d;
  margin-right: 10px;
`;
const DetailsValue = styled.div`
  color: #222222;
`;
const DetailsSimpleText = styled.div`
  padding: 10px 0;
`;

class DetailsLine extends Component {
  static propTypes = {
    name: PropTypes.string,
    value: PropTypes.object
  };

  render() {
    const { name, value } = this.props;

    return (
      <DetailsLineContainer>
        {name && <DetailsName>{name}:</DetailsName>}
        <DetailsValue>{value}</DetailsValue>
      </DetailsLineContainer>
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
        <SideTabs
          tabs={[
            {
              title: 'Event Overview',
              icon: <CalendarIcon color="#c0b69b" size="20" />,
              content: (
                <Details>
                  {event.consultants.map((consultant) => (
                    <DetailsLine
                      key={consultant.id}
                      name="Consultant"
                      value={<LazyUserName user={consultant} />}
                    />
                  ))}
                  {event.type && <DetailsLine name="Event Type" value={event.type} />}
                  {event.ceremony && <DetailsLine name="Ceremony" value={event.ceremony} />}
                  <DetailsLine name="Start Time" value={event.start.format('LT')} />
                  <DetailsLine name="End Time" value={event.end.format('LT')} />
                </Details>
              )
            },
            {
              title: 'Client Details',
              icon: <CalendarIcon color="#c0b69b" size="20" />,
              content: (
                <Details>
                  <DetailsLine name="Name" value={event.clientName} />
                </Details>
              )
            },
            {
              title: 'Room & Layout',
              icon: <CalendarIcon color="#c0b69b" size="20" />,
              content: (
                <Details>
                  <DetailsLine name="Room" value={event.room} />
                  <DetailsLine name="Layout" value={event.layout} />
                </Details>
              )
            },
            {
              title: 'Notes',
              icon: <CalendarIcon color="#c0b69b" size="20" />,
              content: (
                <Details>
                  <DetailsSimpleText>{event.notes}</DetailsSimpleText>
                </Details>
              )
            }
          ]}
        />
      </ContentContainer>
    );
  }
}

const FooterContainer = styled.div`
  display: flex;
  border-top: solid 1px #d8d8d8;
  padding: 13px 15px;
`;

const FooterRight = styled.div`
  display: flex;
  justify-content: flex-end;

  > * {
    margin-left: 10px;
  }
`;

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
      <FooterContainer>
        <div style={{ flex: 1 }}>
          <Button mode="whiteBg" onClick={this.onDownloadSeatingChart}>
            Download seating chart
          </Button>
        </div>
        <FooterRight>
          <Button mode="danger" onClick={this.onDelete}>
            Delete
          </Button>
          <Button mode="whiteBg" onClick={this.onEdit}>
            Edit
          </Button>
        </FooterRight>
      </FooterContainer>
    );
  }
}

class EventView extends Component {
  static propTypes = {
    event: PropTypes.object.isRequired
  };

  componentDidMount() {
    const { event } = this.props;

    event.owner.load();
    event.consultants.forEach((c) => c.load());
  }

  render() {
    const { event } = this.props;

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
