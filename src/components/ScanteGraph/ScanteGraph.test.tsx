import React from 'react';
import { render, screen } from '@testing-library/react';
import ScanteGraph from './index'; // Adjust the import if the path is different

describe('ScanteGraph Component', () => {
	it('should render without crashing', () => {
		render(
			<ScanteGraph
				data={[]}
				width={0}
				height={0}
				xAxisType={'number'}
				graphType={'line'}
			/>
		);
		const graphElement = screen.getByTestId('scante-graph'); // Ensure your component has a data-testid attribute
		expect(graphElement).toBeInTheDocument();
	});
});
