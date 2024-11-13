import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import FloatInput, { FloatInputProps } from './index';

export default {
	title: 'Components/FloatInput',
	component: FloatInput
} as Meta;

const Template: StoryFn<FloatInputProps> = (args) => <FloatInput {...args} />;

export const Default = Template.bind({});
Default.args = {
	label: 'Enter Text',
	value: '',
	placeholder: 'Type here...',
	type: 'text',
	required: false,
	maxLength: 100,
	onChange: (e) => console.log(e.target.value)
};
