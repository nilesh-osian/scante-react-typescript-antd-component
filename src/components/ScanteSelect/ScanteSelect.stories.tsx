import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import ScanteSelect from './index';
export default {
	title: 'Components/ScanteSelect',
	component: ScanteSelect
} as Meta;

const Template: StoryFn<typeof ScanteSelect> = (args) => (
	<ScanteSelect {...args} />
);

export const Default = Template.bind({});
Default.args = {
	options: Array(10000)
		.fill(null)
		.map((_, index) => ({
			appid: `appid_${index}`,
			for_guid: `for_guid_${index}`,
			for_guid_source: 'rep',
			sg_id: `sg_id_${index}`,
			right: null,
			name: `Name ${index}`,
			guid: `guid_${index}`
		})),
	optionLabel: 'name',
	label: 'Select Fruit',
	onChange: (value) => console.log('Selected:', value)
};
