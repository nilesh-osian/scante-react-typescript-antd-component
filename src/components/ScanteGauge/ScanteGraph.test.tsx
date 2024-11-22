import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom'; // Add this import
import ScanteGraph, { ScanteGraphProps } from './index';

describe('ScanteGraph Component', () => {
	const mockData: ScanteGraphProps['data'] = [
		{
			name: 'Series 1',
			values: [
				{ name: '2023-01-01', value: 10 },
				{ name: '2023-01-02', value: 20 }
			],
			color: '#ff0000',
			label: 'Series 1'
		},
		{
			name: 'Series 2',
			values: [
				{ name: '2023-01-01', value: 15 },
				{ name: '2023-01-02', value: 25 }
			],
			color: '#00ff00',
			label: 'Series 2'
		}
	];

	it('renders without crashing', () => {
		const { container } = render(
			<ScanteGraph
				data={mockData}
				width={500}
				height={300}
				xAxisType="date"
				graphType="line"
			/>
		);
		expect(
			container.querySelector('.recharts-responsive-container')
		).toBeInTheDocument();
	});
});
