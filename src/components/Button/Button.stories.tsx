import React from 'react';
import { Story, Meta } from '@storybook/react';
import Button, { ButtonProps } from './index';

export default {
  title: 'Components/Button',
  component: Button
} as Meta;

const Template: Story<ButtonProps> = (args) => (
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
