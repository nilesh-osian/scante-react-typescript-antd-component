import React, { useState } from 'react';
import { TimePicker } from 'antd';
import dayjs, { Dayjs } from 'dayjs';

import './index.css';

export interface FloatTimepickerProps {
	label: string;
	value: string;
	placeholder: string;
	required: boolean;
	onChange: (value: string) => void;
}

const FloatTimepicker = (props: FloatTimepickerProps) => {
	const [focus, setFocus] = useState(false);
	const {
		label,
		value,
		placeholder: propPlaceholder,
		required,
		onChange
	} = props;

	const displayPlaceholder = propPlaceholder || label;
	const isOccupied = focus || (value && value.length !== 0);
	const labelClass = isOccupied ? 'label as-label' : 'label as-placeholder';
	const requiredMark = required ? <span className="text-danger">*</span> : null;
	const timeValue = value ? dayjs(value, 'HH:mm') : null;

	const handleTimeChange = (time: Dayjs) => {
		if (onChange) {
			const timeString = time ? time.format('HH:mm') : '';
			onChange(timeString);
		}
	};

	const randomSuffix = Math.random().toString(36).substring(2, 8);
	const id = `float-timepicker-${label.replace(/\s+/g, '-').toLowerCase()}-${randomSuffix}`;

	return (
		<div
			className="float-label"
			onBlur={() => setFocus(false)}
			onFocus={() => setFocus(true)}
		>
			<TimePicker
				onChange={handleTimeChange}
				format="HH:mm"
				className="w-full"
				value={timeValue}
				id={id}
				placeholder={!isOccupied ? '' : displayPlaceholder}
			/>
			<label className={labelClass} htmlFor={id}>
				{label} {requiredMark}
			</label>
		</div>
	);
};

export default FloatTimepicker;
