import React from 'react';
import './index.css';
export interface FloatTimepickerProps {
    label: string;
    value: string;
    placeholder: string;
    required: boolean;
    onChange: (value: string) => void;
}
declare const FloatTimepicker: (props: FloatTimepickerProps) => React.JSX.Element;
export default FloatTimepicker;
