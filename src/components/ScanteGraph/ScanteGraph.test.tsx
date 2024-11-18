import React from 'react';
import { render, screen } from '@testing-library/react';
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
		render(
			<ScanteGraph
				data={mockData}
				width={500}
				height={300}
				xAxisType="date"
				graphType="line"
			/>
		);
		expect(screen.getByText('Series 1')).toBeInTheDocument();
		expect(screen.getByText('Series 2')).toBeInTheDocument();
	});

	it('renders the correct number of lines', () => {
		render(
			<ScanteGraph
				data={mockData}
				width={500}
				height={300}
				xAxisType="date"
				graphType="line"
			/>
		);
		const lines = screen.getAllByRole('img', { hidden: true });
		expect(lines.length).toBe(2); // Assuming each line is rendered as an SVG path
	});

	it('handles legend click correctly', () => {
		render(
			<ScanteGraph
				data={mockData}
				width={500}
				height={300}
				xAxisType="date"
				graphType="line"
			/>
		);
		const legendItem = screen.getByText('Series 1');
		legendItem.click();
		// Add assertions to check if the line corresponding to 'Series 1' is hidden or opacity is changed
	});
});
