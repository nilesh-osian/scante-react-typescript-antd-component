/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { useEffect, useState } from 'react';
import moment from 'moment';
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer
} from 'recharts';

export interface ScanteGraphProps {
	data: {
		name: string;
		values: { name: string; value: string | number | boolean }[];
		color: string;
		label: string;
	}[];
	width: number;
	height: number;
	xAxisType: 'date' | 'number';
	graphType: 'line' | 'bar';
}

const ScanteGraph: React.FC<ScanteGraphProps> = ({
	data,
	xAxisType,
	graphType = 'line'
}) => {
	const [graphData, setGraphData] = useState<
		{
			name: string | number;
			date?: Date;
			[key: string]: number | string | Date | undefined;
		}[]
	>([]);

	const [legendItems, setLegendItems] = useState<{
		[key: string]: {
			name: string;
			color: string;
			opacity: number;
			active: boolean;
		};
	}>({});
	useEffect(() => {
		let finalData: {
			name: string | number;
			[key: string]: number | string | Date | undefined;
		}[] = [];
		let allData: {
			[key: string]: {
				name: string;
				date?: Date;
				[key: string]: number | string | Date | undefined;
			};
		} = {};
		let legendItems: {
			[key: string]: {
				name: string;
				color: string;
				opacity: number;
				active: boolean;
			};
		} = {};
		data.forEach((item) => {
			item.label ??= item.name;
			legendItems[item.label] = {
				name: item.label,
				color: item.color,
				opacity: 1,
				active: true
			};
			item.values.forEach((value) => {
				allData[value.name] ??= { name: value.name };
				let tempData = allData[value.name];
				if (xAxisType === 'date') {
					tempData.date = new Date(value.name.toString());
					tempData.name = moment(value.name).format('HH:mm:ss MMMM Do, YYYY');
				}
				switch (typeof value.value) {
					case 'number':
						tempData[item.name] = value.value.toFixed(9);
						break;
					case 'boolean':
						tempData[item.name] = value.value ? 1 : 0;
						break;
					default:
						tempData[item.name] = value.value;
						break;
				}
			});
		});
		Object.values(allData).forEach(
			(item: {
				name: string;
				[key: string]: number | string | Date | undefined;
			}) => {
				let currentItem: {
					[key: string]: number | string | Date | undefined;
				} = { ...item };
				delete currentItem.name;
				delete currentItem.date;
				const numericValues = Object.values(currentItem).filter(
					(val): val is number =>
						typeof val === 'string' || typeof val === 'number'
				);
				console.log(numericValues);
				item.value = Math.max(...numericValues);
				finalData.push(item);
			}
		);
		finalData.sort((a, b) => {
			switch (xAxisType) {
				case 'date': {
					const dateA = a.date instanceof Date ? a.date.getTime() : 0;
					const dateB = b.date instanceof Date ? b.date.getTime() : 0;
					return dateA - dateB;
				}
				case 'number': {
					const numberA = a.name as number;
					const numberB = b.name as number;
					return numberA - numberB;
				}
				default:
					return 0;
			}
		});
		setLegendItems(legendItems);
		setGraphData(finalData);
	}, [data]);
	useEffect(() => {
		console.log(graphData);
	}, [graphData]);

	function CustomizedAxisTick(props: any) {
		const {
			fill,
			height,
			orientation,
			payload,
			stroke,
			textAnchor,
			type,
			width,
			x,
			y
		} = props;
		let val = payload.value;
		switch (xAxisType) {
			case 'date':
				val = moment(val, 'HH:mm:ss MMMM Do, YYYY').format(
					'MMMM Do,<br />YYYY'
				);
				break;
			default:
				break;
		}
		return (
			<text
				{...{
					fill,
					height,
					orientation,
					stroke,
					textAnchor,
					type,
					width,
					x,
					y
				}}
				className="recharts-text recharts-cartesian-axis-tick-value"
			>
				{val.split('<br />').map((value: string, index: number) => {
					const dy = 0.71 * (index + 1) + 'em';
					return (
						<tspan dy={dy} key={index} x={payload.tickCoord}>
							{value}
						</tspan>
					);
				})}
			</text>
		);
	}

	function handleLegendClick(e: any) {
		legendItems[e.dataKey].active = !legendItems[e.dataKey].active;
		setLegendItems({ ...legendItems });
	}

	return (
		<div
			style={{
				width: '100%',
				height: '100%',
				minHeight: '50vh',
				minWidth: '50vw'
			}}
		>
			<ResponsiveContainer width="100%" height={400}>
				<LineChart
					width={500}
					height={300}
					data={graphData}
					margin={{
						top: 5,
						right: 30,
						left: 20,
						bottom: 5
					}}
				>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis height={60} dataKey="name" tick={<CustomizedAxisTick />} />
					<YAxis dataKey="value" tickFormatter={(value) => value.toFixed(9)} />
					<Tooltip />
					<Legend
						verticalAlign="top"
						align="right"
						inactiveColor="#8F8F8F"
						onClick={handleLegendClick}
					/>
					{graphType === 'line' &&
						data.map((item) => {
							let legendItem = legendItems[item.label];
							console.log(legendItem);
							return (
								<Line
									key={item.name}
									type="step"
									dataKey={item.name}
									stroke={legendItem?.active ? item.color : '#8F8F8F'}
									activeDot={{ r: 8 }}
									opacity={legendItem?.active ? 1 : 0.2}
								/>
							);
						})}
				</LineChart>
			</ResponsiveContainer>
		</div>
	);
};

export default ScanteGraph;
