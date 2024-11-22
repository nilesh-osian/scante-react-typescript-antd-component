import React from 'react';
import { render, screen } from '@testing-library/react';
import ScanteGauge from './index';

describe('ScanteGauge Component', () => {
	it('renders without crashing', () => {
		render(
			<ScanteGauge
				intake={50}
				intakeGaugeLabels={[0, 20, 40, 60, 80, 100]}
				intakeGaugeMin={0}
				intakeGaugeMax={100}
			/>
		);
		expect(screen.getByText('50')).toBeInTheDocument();
	});
});
