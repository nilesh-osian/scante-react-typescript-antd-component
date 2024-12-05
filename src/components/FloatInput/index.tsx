import React, { useState } from 'react';
import { Input } from 'antd';

import './index.css';
export interface FloatInputProps {
	label?: string;
	value: string | number;
	placeholder?: string;
	type?: 'text' | 'email' | 'number';
	required?: boolean;
	maxLength?: number;
	disabled?: boolean;
	onFocus?: () => void;
	onBlur?: () => void;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	className?: string;
	style?: React.CSSProperties;
}
const FloatInput = (props: FloatInputProps) => {
	const [focus, setFocus] = useState(false);
	let {
		label = '',
		value,
		placeholder,
		type = 'text',
		required,
		maxLength,
		disabled
	} = props;

	if (!placeholder) placeholder = label;

	const isOccupied =
		focus || (value !== undefined && value !== null && value !== '');

	const labelClass = isOccupied ? 'label as-label' : 'label as-placeholder';

	const requiredMark = required ? <span className="text-danger">*</span> : null;

	return (
		<div
			className={`float-label ${props.className}`}
			style={props.style}
			onBlur={() => {
				setFocus(false);
				props.onBlur?.();
			}}
			onFocus={() => {
				setFocus(true);
				props.onFocus?.();
			}}
		>
			{(type == 'text' || type == 'email') && (
				<Input
					onChange={props.onChange}
					type={type}
					value={value}
					disabled={disabled}
				/>
			)}
			{type == 'number' && (
				<Input
					onChange={props.onChange}
					maxLength={maxLength}
					type={type}
					value={value}
					disabled={disabled}
				/>
			)}

			<label className={labelClass}>
				{label} {requiredMark}
			</label>
		</div>
	);
};

export default FloatInput;
