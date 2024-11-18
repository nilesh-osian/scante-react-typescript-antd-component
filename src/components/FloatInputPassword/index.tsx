import React, { useState } from 'react';
import { Input } from 'antd';

import './index.css';

export interface FloatInputPasswordProps {
	label: string;
	value: string;
	placeholder: string;
	type: 'password';
	required: boolean;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FloatInputPassword = (props: FloatInputPasswordProps) => {
	const [focus, setFocus] = useState(false);
	let { label, value, placeholder, type, required } = props;

	if (!placeholder) placeholder = label;

	const isOccupied = focus || (value && value.length !== 0);

	const labelClass = isOccupied ? 'label as-label' : 'label as-placeholder';

	const requiredMark = required ? <span className="text-danger">*</span> : null;
	const randomSuffix = Math.random().toString(36).substring(2, 8);
	const id = `float-input-password-${label.replace(/\s+/g, '-').toLowerCase()}-${randomSuffix}`;

	return (
		<div
			className="float-label"
			onBlur={() => setFocus(false)}
			onFocus={() => setFocus(true)}
		>
			{type == 'password' && (
				<Input.Password
					onChange={props.onChange}
					type={type}
					defaultValue={value}
					placeholder={placeholder}
					id={id}
				/>
			)}

			<label className={labelClass} htmlFor={id}>
				{label} {requiredMark}
			</label>
		</div>
	);
};

export default FloatInputPassword;
