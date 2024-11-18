import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import FloatTimepicker from './index';

describe('FloatTimepicker Component', () => {
	it('renders with correct label', () => {
		const { getByText } = render(
			<FloatTimepicker
				label="Select Time"
				value=""
				placeholder="Choose..."
				required={false}
				onChange={() => {}}
			/>
		);
		expect(getByText('Select Time')).toBeInTheDocument();
	});
});
