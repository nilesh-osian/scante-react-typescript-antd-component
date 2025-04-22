declare module 'gaugeJS2' {
	interface Gauge {
		render(): void;
		renderStaticLabels(
			staticLabels: {
				font?: string;
				color?: string;
				labels: Array<{ label?: number; font?: string } | number>;
				fractionDigits?: number;
				unit?: string;
			},
			w: number,
			h: number,
			radius: number
		): void;
		canvas: HTMLCanvasElement;
		ctx: CanvasRenderingContext2D;
		paddingTop: number;
		availableHeight: number;
		radius: number;
		lineWidth: number;
		extraPadding: number;
		getAngle(value: number): number;
		displayedValue: number;
		textField: {
			render: (gauge: Gauge) => void;
		} | null;
		options: {
			radiusScale: number;
			staticLabels?: {
				font?: string;
				color?: string;
				labels: Array<{ label?: number; font?: string } | number>;
				fractionDigits?: number;
				unit?: string;
			};
			staticZones?: Array<{
				min: number;
				max: number;
				height?: number;
				offset?: number;
				strokeStyle: string;
			}>;
			limitMin?: boolean;
			limitMax?: boolean;
			angle: number;
			renderTicks?: boolean;
			customFillStyle?: (gauge: Gauge) => CanvasGradient;
			colorStart: string;
			colorStop?: string;
			gradientType?: number;
			strokeColor: string;
		};
		percentColors: Array<{
			pct: number;
			color: string;
		}> | null;
		getColorForValue(value: number, generateGradient: boolean): CanvasGradient;
		gp: Array<{
			update: (force: boolean) => void;
		}>;
		displayScale: number;
		minValue: number;
		maxValue: number;
	}
}
