import React from 'react';
import './index.css';
export interface FloatInputPasswordProps {
    label: string;
    value: string;
    placeholder: string;
    type: 'password';
    required: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
declare const FloatInputPassword: (props: FloatInputPasswordProps) => React.JSX.Element;
export default FloatInputPassword;
