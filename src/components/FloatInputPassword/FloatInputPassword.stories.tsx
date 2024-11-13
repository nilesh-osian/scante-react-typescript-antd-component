import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import FloatInputPassword, { FloatInputPasswordProps } from './index';

export default {
	title: 'Components/FloatInputPassword',
	component: FloatInputPassword
} as Meta;

const Template: StoryFn<FloatInputPasswordProps> = (args) => (
	<FloatInputPassword {...args} />
);

export const Default = Template.bind({});
Default.args = {
	label: 'Enter Password',
	value: '',
	placeholder: 'Password',
	type: 'password',
	required: false,
	maxlength: 100,
	onChange: (e) => console.log(e.target.value)
};
