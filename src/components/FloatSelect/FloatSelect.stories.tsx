import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import FloatSelect, { FloatSelectProps } from './index';

export default {
	title: 'Components/FloatSelect',
	component: FloatSelect
} as Meta;

const Template: StoryFn<FloatSelectProps> = (args) => <FloatSelect {...args} />;

export const Default = Template.bind({});
Default.args = {
	label: 'Select Option',
	value: '',
	placeholder: 'Choose...',
	required: false,
	options: [
		{ label: 'Option 1', value: '1' },
		{ label: 'Option 2', value: '2' }
	],
	onChange: (value) => console.log(value)
};
