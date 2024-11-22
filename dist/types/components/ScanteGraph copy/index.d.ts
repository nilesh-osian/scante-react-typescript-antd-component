import React from 'react';
export interface ScanteGraphProps {
    data: {
        name: string;
        values: {
            name: string;
            value: string | number | boolean;
        }[];
        color: string;
        label: string;
    }[];
    width: number;
    height: number;
    xAxisType: 'date' | 'number';
    graphType: 'line' | 'bar';
}
declare const ScanteGraph: React.FC<ScanteGraphProps>;
export default ScanteGraph;
