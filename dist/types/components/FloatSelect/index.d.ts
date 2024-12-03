import React from 'react';
export interface FloatSelectProps {
    label: string;
    value: string;
    placeholder: string;
    required: boolean;
    options: {
        label: string;
        value: string;
    }[];
    onChange: (value: string) => void;
    disabled?: boolean;
}
declare const FloatSelect: (props: FloatSelectProps) => React.JSX.Element;
export default FloatSelect;
