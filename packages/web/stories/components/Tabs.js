import { storiesOf } from '@storybook/react';
import {
  Tab,
  TabList,
  Tabs,
  TabPanel
} from '../../ui/components/Tabs.js';
import Icon from '../../ui/icons/User.js';

storiesOf('components/Tabs', module)
  .add('Default', () => (
	<Tabs defaultTab="one">
		<TabList>
			<Tab tabFor="one" ><Icon color="#c0b69b" />Tab 1</Tab>
			<Tab tabFor="two" ><Icon color="#c0b69b" />Tab 2</Tab>
			<Tab tabFor="three" ><Icon color="#c0b69b" />Tab 3</Tab>
		</TabList>
		<TabPanel tabId="one">
			<p>Tab 1 content</p>
		</TabPanel>
		<TabPanel tabId="two">
			<p>Tab 2 content</p>
		</TabPanel>
		<TabPanel tabId="three">
			<p>Tab 3 content</p>
		</TabPanel>
	</Tabs>
  ));
