import React, { useState } from 'react';
import { Select } from 'antd';

export interface FloatSelectProps {
	label: string;
	value: string;
	placeholder: string;
	required: boolean;
	options: { label: string; value: string }[];
	onChange: (value: string) => void;
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
		...restProps
	} = props;

	const actualPlaceholder = placeholder || label;
	const isOccupied = focus || (value && value.toString().length !== 0);
	const labelClass = isOccupied ? 'label as-label' : 'label as-placeholder';
	const requiredMark = required ? (
		<span className="text-red-500">*</span>
	) : null;

	return (
		<div
			className="relative float-label"
			onBlur={() => setFocus(false)}
			onFocus={() => setFocus(true)}
		>
			<Select
				className="w-full"
				value={value}
				onChange={onChange}
				onFocus={() => setFocus(true)}
				onBlur={() => setFocus(false)}
				placeholder=""
				options={options}
				{...restProps}
			/>
			<label className={labelClass}>
				{isOccupied ? label : actualPlaceholder} {requiredMark}
			</label>
		</div>
	);
};

export default FloatSelect;
