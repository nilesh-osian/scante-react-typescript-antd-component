import '../../extra-lib/gauge-extra';
import './index.css';
import React from 'react';
export interface ScanteGaugeProps {
    intake: number;
    intakeGaugeLabels: number[];
    intakeGaugeMin: number;
    intakeGaugeMax: number;
    zoneStyles?: ZoneItem[];
    containerClass?: string;
    canvasClass?: string;
    valueClass?: string;
    style?: React.CSSProperties;
}
interface ZoneItem {
    value: number;
    activeColor: string;
    color: string;
}
declare const ScanteGauge: React.FC<ScanteGaugeProps>;
export default ScanteGauge;
