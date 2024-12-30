import React, { useState, useMemo } from 'react';
import { theme } from 'antd';
import { FixedSizeList as List } from 'react-window';
import './ScanteSelect.css'; // Import the CSS file
import FloatInput from '../FloatInput';

interface ScanteSelectProps<T> {
	options: T[];
	optionLabel: keyof T;
	onChange: (value: T) => void;
	label?: string;
}

const ScanteSelect = <T,>({
	options,
	optionLabel,
	onChange,
	label
}: ScanteSelectProps<T>) => {
	const [searchTerm, setSearchTerm] = useState('');
	const [showSuggestions, setShowSuggestions] = useState(false);

	const { token } = theme.useToken();

	const filteredOptions = useMemo(() => {
		return options
			.filter((option) =>
				String(option[optionLabel])
					.toLowerCase()
					.includes(searchTerm.toLowerCase())
			)
			.sort((a, b) => {
				const labelA = String(a[optionLabel]).toLowerCase();
				const labelB = String(b[optionLabel]).toLowerCase();
				return labelA.localeCompare(labelB);
			});
	}, [options, searchTerm, optionLabel]);

	const Row = ({
		index,
		style
	}: {
		index: number;
		style: React.CSSProperties;
	}) => (
		<div
			style={{
				...style,
				transition: `background-color ${token.motionDurationMid}`
			}}
			onClick={() => {
				console.log(filteredOptions[index]);
				onChange(filteredOptions[index]);
				setSearchTerm(String(filteredOptions[index][optionLabel]));
				setShowSuggestions(false);
			}}
			className="scante-select-option"
		>
			{String(filteredOptions[index][optionLabel])}
		</div>
	);

	return (
		<div className="scante-select" style={{ borderColor: token.colorBorder }}>
			<FloatInput
				label={label || ''}
				type="text"
				value={searchTerm}
				onChange={(e) => {
					setSearchTerm(e.target.value);
					setShowSuggestions(true);
				}}
				onFocus={() => {
					setShowSuggestions(true);
				}}
				onBlur={() => {
					setTimeout(() => {
						setShowSuggestions(false);
					}, 500);
				}}
				style={{
					borderColor: token.colorBorder,
					borderRadius: token.borderRadius,
					boxShadow: token.boxShadow
				}}
			/>
			{showSuggestions && (
				<div className="scante-select-dropdown-container">
					<List
						height={200}
						itemCount={filteredOptions.length}
						itemSize={50}
						width={'100%'}
						className="scante-select-dropdown"
						style={{
							borderColor: token.colorBorder,
							borderRadius: token.borderRadius,
							boxShadow: token.boxShadow
						}}
					>
						{Row}
					</List>
				</div>
			)}
		</div>
	);
};

export default ScanteSelect;
