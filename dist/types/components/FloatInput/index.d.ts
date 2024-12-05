import React from 'react';
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
declare const FloatInput: (props: FloatInputProps) => React.JSX.Element;
export default FloatInput;
