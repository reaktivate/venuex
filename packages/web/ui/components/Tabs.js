import React from 'react';
import {
  Tab as UnstyledTab,
  TabList as UnstyledTabList,
  Tabs as UnstyledTabs,
  TabPanel as UnstyledTabPanel
} from 'react-web-tabs';
import styled from 'styled-components';

const Tabs = styled(UnstyledTabs)`
  padding: 25px 0;
  max-width: 500px;
  width: 100%;
  display: flex;
`;

const TabList = styled(UnstyledTabList)`
  display: flex;
  flex-direction: column;
  max-width: 180px;
  width: 100%;
  border-right: 1px solid #d8d8d8;
`;

const Tab = styled(UnstyledTab)`
  max-width: 180px;
  cursor: pointer;
  min-height: 50px;
  padding: 10px 30px 10px 20px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  position: relative;
  border: 0;
  outline: 0;
  background-color: #ffffff;
  filter: grayscale(100%);
  transition-timing-function: ease-in;
  transition: 0.2s filter;
  user-select: none;
  text-transform: uppercase;
  font-family: Montserrat;
  font-size: 11px;
  font-weight: 400;
  letter-spacing: -0.1px;
  color: #c0b69b;
  & > svg,
  & > img {
    margin-right: 10px;
  }
  &:after {
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
    content: '';
    right: 0;
    position: absolute;
    width: 4px;
    height: 100%;
    background-color: transparent;
    transition-timing-function: ease-in;
    transition: 0.2s all;
  }
  &:hover {
    filter: grayscale(0%);
  }
  &[aria-selected='true'] {
    filter: grayscale(0%);
    &:after {
      box-shadow: -2px 0 4px 0 rgba(0, 0, 0, 0.15);
      background-color: #c0b69b;
    }
  }
`;

const TabPanel = styled(UnstyledTabPanel)`
  padding: 0 10px 0 40px;
  flex-grow: 1;
`;

export { Tabs, TabList, Tab, TabPanel };
