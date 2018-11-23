import React, { Component } from 'react';
import { Form, FastField } from 'formik';
import * as Yup from 'yup';
import { Prompt } from 'react-router-dom';
import withForm from '@venuex/web/ui/hocs/withForm';
import FormPropTypes from '@venuex/web/ui/types/Form';
import Input from '@venuex/web/ui/elements/form/Input';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import RoundIcon from '@venuex/web/ui/elements/RoundIcon';
import Button from '@venuex/web/ui/elements/buttons/Button';
import Icon from '@venuex/web/ui/icons/ImportFile';
import LazyUserName from '@venuex/web/ui/components/billing/LazyUserName';
import { Tab, TabList, TabPanel, Tabs } from '@venuex/web/ui/components/Tabs';

class EventView extends Component {
  static propTypes = {
    event: PropTypes.object.isRequired
  };

  componentDidMount() {
    const { event } = this.props;

    this.props.fetchEntity();

    //event.owner.load();
    //event.consultants.forEach((c) => c.load());
  }

  render() {
    const { entity: event } = this.props;

    if (!event) return <div>...</div>;

    return (
      <Container>
        <Header event={event} />
        <Content event={event} />
        <Footer {...this.props} />
      </Container>
    );
  }
}

EventView.propTypes = {
  ...FormPropTypes
};

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
  display: flex;
  padding: 0 20px;
`;

const Details = styled.div`
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
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
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
        <Tabs defaultTab="one">
          <TabList>
            <Tab tabFor="one">
              <Icon color="#c0b69b" />
              Event Overview
            </Tab>
            <Tab tabFor="two">
              <Icon color="#c0b69b" />
              Client Details
            </Tab>
            <Tab tabFor="three">
              <Icon color="#c0b69b" />
              Room & Layout
            </Tab>
            <Tab tabFor="four">
              <Icon color="#c0b69b" />
              Notes
            </Tab>
          </TabList>
          <TabPanel tabId="one">
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
          </TabPanel>
          <TabPanel tabId="two">
            <Details>
              <DetailsLine name="Name" value={event.clientName} />
            </Details>
          </TabPanel>
          <TabPanel tabId="three">
            <Details>
              <DetailsLine name="Room" value={event.room} />
              <DetailsLine name="Layout" value={event.layout} />
            </Details>
          </TabPanel>
          <TabPanel tabId="four">
            <Details>
              <DetailsSimpleText>{event.notes}</DetailsSimpleText>
            </Details>
          </TabPanel>
        </Tabs>
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
    this.props.onSwitchToEdit();
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

export default EventView;
