import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import FloatTimepicker from './index';

test('FloatTimepicker renders with correct label', () => {
	const { getByText } = render(
		<FloatTimepicker
			label="Select Time"
			value=""
			placeholder="HH:mm"
			required={false}
			onChange={() => {}}
		/>
	);
	expect(getByText('Select Time')).toBeInTheDocument();
});

test('FloatTimepicker calls onChange on time change', () => {
	const handleChange = jest.fn();
	const { getByRole } = render(
		<FloatTimepicker
			label="Select Time"
			value=""
			placeholder="HH:mm"
			required={false}
			onChange={handleChange}
		/>
	);
	fireEvent.change(getByRole('textbox'), { target: { value: '12:00' } });
	expect(handleChange).toHaveBeenCalledWith('12:00');
});
