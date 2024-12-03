import React, { useState } from 'react';
import { Input } from 'antd';

import './index.css';
export interface FloatInputProps {
	label: string;
	value: string | number;
	placeholder: string;
	type: 'text' | 'email' | 'number';
	required: boolean;
	maxLength: number;
	disabled?: boolean;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const FloatInput = (props: FloatInputProps) => {
	const [focus, setFocus] = useState(false);
	let { label, value, placeholder, type, required, maxLength, disabled } =
		props;

	if (!placeholder) placeholder = label;

	const isOccupied =
		focus || (value !== undefined && value !== null && value !== '');

	const labelClass = isOccupied ? 'label as-label' : 'label as-placeholder';

	const requiredMark = required ? <span className="text-danger">*</span> : null;

	return (
		<div
			className="float-label"
			onBlur={() => setFocus(false)}
			onFocus={() => setFocus(true)}
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
					placeholder={placeholder}
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
