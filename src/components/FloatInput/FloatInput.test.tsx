import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import FloatInput from './index';

test('FloatInput renders with correct label', () => {
	const { getByText } = render(
		<FloatInput
			label="Enter Text"
			value=""
			placeholder="Type here..."
			type="text"
			required={false}
			maxLength={100}
			onChange={() => {}}
		/>
	);
	expect(getByText('Enter Text')).toBeInTheDocument();
});

test('FloatInput calls onChange on input change', () => {
	const handleChange = jest.fn();
	const { getByRole } = render(
		<FloatInput
			label="Enter Text"
			value=""
			placeholder="Type here..."
			type="text"
			required={false}
			maxLength={100}
			onChange={handleChange}
		/>
	);
	fireEvent.change(getByRole('textbox'), { target: { value: 'Hello' } });
	expect(handleChange).toHaveBeenCalled();
});
