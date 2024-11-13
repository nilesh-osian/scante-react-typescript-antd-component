import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import Button, { ButtonProps } from './index';

export default {
	title: 'Components/Button',
	component: Button
} as Meta;

const Template: StoryFn<ButtonProps> = (args) => (
	<Button {...args}>Click Me</Button>
);

export const Default = Template.bind({});
Default.args = {
	type: 'default'
};

export const Primary = Template.bind({});
Primary.args = {
	type: 'primary'
};
