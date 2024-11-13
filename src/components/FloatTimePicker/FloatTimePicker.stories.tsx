import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import FloatTimepicker, { FloatTimepickerProps } from './index';

export default {
	title: 'Components/FloatTimePicker',
	component: FloatTimepicker
} as Meta;

const Template: StoryFn<FloatTimepickerProps> = (args) => (
	<FloatTimepicker {...args} />
);

export const Default = Template.bind({});
Default.args = {
	label: 'Select Time',
	value: '',
	placeholder: 'HH:mm',
	required: false,
	onChange: (value) => console.log(value)
};
