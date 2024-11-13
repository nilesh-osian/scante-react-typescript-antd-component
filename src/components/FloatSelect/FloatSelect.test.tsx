import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import FloatSelect from './index';

test('FloatSelect renders with correct label', () => {
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
	expect(getByText('Select Option')).toBeInTheDocument();
});

test('FloatSelect calls onChange on option select', () => {
	const handleChange = jest.fn();
	const { getByRole } = render(
		<FloatSelect
			label="Select Option"
			value=""
			placeholder="Choose..."
			required={false}
			options={[{ label: 'Option 1', value: '1' }]}
			onChange={handleChange}
		/>
	);
	fireEvent.mouseDown(getByRole('combobox'));
	fireEvent.click(getByRole('option', { name: 'Option 1' }));
	expect(handleChange).toHaveBeenCalledWith('1');
});
