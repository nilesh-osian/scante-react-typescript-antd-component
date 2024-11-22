import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import ScanteGauge, { ScanteGaugeProps } from './index';

export default {
	title: 'Components/ScanteGauge',
	component: ScanteGauge
} as Meta;

const Template: StoryFn<ScanteGaugeProps> = (args) => <ScanteGauge {...args} />;

export const Default = Template.bind({});
Default.args = {
	intake: 1.48,
	intakeGaugeLabels: [0, 0.4, 0.8, 1.2, 1.6, 2],
	intakeGaugeMin: 0,
	intakeGaugeMax: 2,
	zoneStyles: [
		{
			value: 1.09,
			activeColor: '#31af64',
			color: '#45584c'
		},
		{
			value: 0.36,
			activeColor: '#fdf63a',
			color: '#6b6a33'
		},
		{
			value: 0.35,
			activeColor: '#3A4DFDFF',
			color: '#061494FF'
		},
		{
			value: 2,
			activeColor: '#f05454',
			color: '#801313'
		}
	]
};
