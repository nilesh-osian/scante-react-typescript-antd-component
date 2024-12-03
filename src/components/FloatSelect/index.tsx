import React, { useState } from 'react';
import { Select } from 'antd';

export interface FloatSelectProps {
	label: string;
	value: string;
	placeholder: string;
	required: boolean;
	options: { label: string; value: string }[];
	onChange: (value: string) => void;
	disabled?: boolean;
}

const FloatSelect = (props: FloatSelectProps) => {
	const [focus, setFocus] = useState(false);
	const {
		label,
		value,
		placeholder,
		required,
		options,
		onChange,
		disabled,
		...restProps
	} = props;

	const actualPlaceholder = placeholder || label;
	const isOccupied = focus || (value && value.toString().length !== 0);
	const labelClass = isOccupied ? 'label as-label' : 'label as-placeholder';
	const requiredMark = required ? (
		<span className="text-red-500">*</span>
	) : null;
	const randomSuffix = Math.random().toString(36).substring(2, 8);
	const id = `float-select-${label.replace(/\s+/g, '-').toLowerCase()}-${randomSuffix}`;

	return (
		<div
			className="relative float-label"
			onBlur={() => setFocus(false)}
			onFocus={() => setFocus(true)}
		>
			<Select
				id={id}
				className="w-full"
				value={value}
				onChange={onChange}
				onFocus={() => setFocus(true)}
				onBlur={() => setFocus(false)}
				placeholder={actualPlaceholder}
				options={options}
				disabled={disabled}
				{...restProps}
			/>
			<label className={labelClass} htmlFor={id}>
				{isOccupied ? label : actualPlaceholder} {requiredMark}
			</label>
		</div>
	);
};

export default FloatSelect;
