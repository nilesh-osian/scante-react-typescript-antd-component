import React, { useEffect, useRef } from 'react';

export interface ScanteGaugeProps {
	intake: number;
	intakeGaugeLabels: number[];
	intakeYellowThreshold: number;
	intakeRedThreshold: number;
	intakeGaugeMin: number;
	intakeGaugeMax: number;
}

interface ZoneItem {
	value: number;
	activeColor: string;
	color: string;
}

const ScanteGauge: React.FC<ScanteGaugeProps> = ({
	intake,
	intakeGaugeLabels,
	intakeYellowThreshold,
	intakeRedThreshold,
	intakeGaugeMin,
	intakeGaugeMax
}) => {
	const gaugeRef = useRef<HTMLCanvasElement>(null);
	const gaugeValueRef = useRef<HTMLDivElement>(null);
	const gaugeInstanceRef = useRef<typeof Gauge>(null);

	useEffect(() => {
		const intakeGaugeArray = intakeGaugeLabels.map((label) => label / 100);

		const zoneData: ZoneItem[] = [
			{
				value: intakeYellowThreshold,
				activeColor: '#31af64',
				color: '#45584c'
			},
			{
				value: intakeRedThreshold - intakeYellowThreshold,
				activeColor: '#fdf63a',
				color: '#6b6a33'
			},
			{
				value: intakeGaugeLabels[5] / 100,
				activeColor: '#c11f31',
				color: '#71343b'
			}
		];

		const options = {
			minValue: intakeGaugeMin,
			maxValue: intakeGaugeMax,
			spaceScaling: 0.01,
			colorScaling: 0.05,
			zone: zoneData
		};

		const { zone, minValue, maxValue, spaceScaling, colorScaling } = options;

		const value = Math.max(intake, minValue);

		// const labels: number[] = [minValue, (maxValue + minValue) / 2, maxValue];

		// Build colorData without mutating original data
		let previousValue = minValue;
		const colorData = zone.map((item) => {
			previousValue += item.value;
			return {
				...item,
				cumulativeValue: previousValue
			};
		});

		const gaping = spaceScaling * maxValue;
		const colorFill = colorScaling * maxValue;
		const zoneRange = colorFill + gaping;

		const oddZoneValues = colorData
			.filter((item) => item.cumulativeValue % zoneRange !== 0)
			.map((item) => item.cumulativeValue);

		let min = minValue;
		const staticZoneList = [];

		while (min <= maxValue) {
			const item = colorData.find(
				(dataItem) => dataItem.cumulativeValue >= min + colorFill
			);

			if (item) {
				if (
					oddZoneValues.length > 0 &&
					min + colorFill - oddZoneValues[0] > 0
				) {
					staticZoneList.push({
						strokeStyle: min < value ? item.activeColor : item.color,
						min: min,
						max: min + colorFill
					});

					min += colorFill + gaping;
					oddZoneValues.shift();
					continue;
				}

				staticZoneList.push({
					strokeStyle: min < value ? item.activeColor : item.color,
					min: min,
					max: min + colorFill
				});
			}

			min += colorFill + gaping;
		}

		const opts = {
			lines: 6,
			angle: 0.01,
			lineWidth: 0.2,
			pointer: {
				length: 0,
				strokeWidth: 0,
				color: '#000000'
			},
			staticZones: staticZoneList,
			limitMax: maxValue,
			limitMin: minValue,
			background: '#FFFFFF',
			generateGradient: true,
			staticLabels: {
				font: '14px sans-serif',
				labels: intakeGaugeArray,
				color: '#FFFFFF',
				unit: '',
				fractionDigits: 1
			}
		};

		const target = gaugeRef.current;
		if (!target) return;

		if (!gaugeInstanceRef.current) {
			gaugeInstanceRef.current = new Gauge(target).setOptions(opts);
		} else {
			gaugeInstanceRef.current.setOptions(opts);
		}

		gaugeInstanceRef.current.maxValue = maxValue;
		gaugeInstanceRef.current.minValue = minValue;
		gaugeInstanceRef.current.animationSpeed = 32;
		gaugeInstanceRef.current.set(value);

		if (gaugeValueRef.current) {
			gaugeValueRef.current.innerHTML =
				intake % 1 === 0 ? intake.toString() : intake.toFixed(2);
		}
	}, [
		intake,
		intakeGaugeLabels,
		intakeYellowThreshold,
		intakeRedThreshold,
		intakeGaugeMin,
		intakeGaugeMax
	]);

	return (
		<div>
			<canvas ref={gaugeRef}></canvas>
			<div ref={gaugeValueRef}></div>
		</div>
	);
};

export default ScanteGauge;
