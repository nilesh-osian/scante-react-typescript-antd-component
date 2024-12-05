import React from 'react';
import { render } from '@testing-library/react';
import ScanteSelect from '.';

// Sample options for testing
const options = [
	{ id: 1, name: 'Apple' },
	{ id: 2, name: 'Banana' },
	{ id: 3, name: 'Cherry' }
];

describe('ScanteSelect Component', () => {
	test('renders without crashing', () => {
		const { getByText } = render(
			<ScanteSelect
				options={options}
				optionLabel="name"
				onChange={() => {}}
				label="Select Fruit"
			/>
		);
		expect(getByText('Select Fruit')).toBeInTheDocument();
	});
});
