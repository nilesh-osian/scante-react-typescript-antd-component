import React from 'react';
import './ScanteSelect.css';
interface ScanteSelectProps<T> {
    options: T[];
    optionLabel: keyof T;
    onChange: (value: T) => void;
    label?: string;
}
declare const ScanteSelect: <T>({ options, optionLabel, onChange, label }: ScanteSelectProps<T>) => React.JSX.Element;
export default ScanteSelect;
