import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import FloatSelect from './index';

describe('FloatSelect Component', () => {
	it('renders with correct placeholder', () => {
		const { getByText } = render(
			<FloatSelect
				label="Select Option"
				value=""
				placeholder="Choose..."
				required={false}
				options={[{ label: 'Option 1', value: '1' }]}
				onChange={() => {}}
			/>
		);
		expect(getByText('Choose...')).toBeInTheDocument();
	});

	it('calls onChange on option select', () => {
		const handleChange = jest.fn();
		const { getByRole, getByText } = render(
			<FloatSelect
				label="Select Option"
				value=""
				placeholder="Choose..."
				required={false}
				options={[{ label: 'Option 1', value: '1' }]}
				onChange={handleChange}
			/>
		);

		fireEvent.mouseDown(getByRole('combobox')); // Open dropdown
		fireEvent.click(getByText('Option 1')); // Select an option

		expect(handleChange).toHaveBeenCalledTimes(1);
		expect(handleChange).toHaveBeenCalledWith('1', {
			label: 'Option 1',
			value: '1'
		});
	});
});
