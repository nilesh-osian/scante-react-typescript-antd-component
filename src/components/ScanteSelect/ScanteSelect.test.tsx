import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ScanteSelect from './index';

describe('ScanteSelect', () => {
	const options = Array.from({ length: 100 }, (_, i) => ({
		label: `Option ${i + 1}`
	}));
	const onChangeMock = jest.fn();

	it('renders without crashing', () => {
		const { getByPlaceholderText } = render(
			<ScanteSelect
				options={options}
				optionLabel="label"
				onChange={onChangeMock}
			/>
		);
		expect(getByPlaceholderText('Search...')).toBeInTheDocument();
	});

	it('filters options based on search term', () => {
		const { getByPlaceholderText, getByText } = render(
			<ScanteSelect
				options={options}
				optionLabel="label"
				onChange={onChangeMock}
			/>
		);
		const searchInput = getByPlaceholderText('Search...');

		fireEvent.change(searchInput, { target: { value: 'Option 1' } });
		expect(getByText('Option 1')).toBeInTheDocument();
	});

	it('calls onChange when an option is clicked', () => {
		const { getByText } = render(
			<ScanteSelect
				options={options}
				optionLabel="label"
				onChange={onChangeMock}
			/>
		);
		const option = getByText('Option 1');

		fireEvent.click(option);
		expect(onChangeMock).toHaveBeenCalledWith({ label: 'Option 1' });
	});
});
