import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import FloatInputPassword from './index';

test('FloatInputPassword renders with correct label', () => {
	const { getByText } = render(
		<FloatInputPassword
			label="Enter Password"
			value=""
			placeholder="Password"
			type="password"
			required={false}
			onChange={() => {}}
		/>
	);
	expect(getByText('Enter Password')).toBeInTheDocument();
});

test('FloatInputPassword calls onChange on input change', () => {
	const handleChange = jest.fn();
	const { getByLabelText } = render(
		<FloatInputPassword
			label="Enter Password"
			value=""
			placeholder="Password"
			type="password"
			required={false}
			onChange={handleChange}
		/>
	);
	fireEvent.change(getByLabelText('Enter Password'), {
		target: { value: 'secret' }
	});
	expect(handleChange).toHaveBeenCalled();
});
