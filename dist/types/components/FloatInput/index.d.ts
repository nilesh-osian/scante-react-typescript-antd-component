import React from 'react';
import './index.css';
export interface FloatInputProps {
    label: string;
    value: string | number;
    placeholder: string;
    type: 'text' | 'email' | 'number';
    required: boolean;
    maxLength: number;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
declare const FloatInput: (props: FloatInputProps) => React.JSX.Element;
export default FloatInput;
