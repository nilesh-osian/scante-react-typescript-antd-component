
declare module 'gaugeJS' {
	interface Gauge {
		render(): void;
		renderStaticLabels(staticLabels: any, w: number, h: number, radius: number): void;
		canvas: HTMLCanvasElement;
		ctx: CanvasRenderingContext2D;
		paddingTop: number;
		availableHeight: number;
		radius: number;
		lineWidth: number;
		extraPadding: number;
		getAngle(value: number): number;
		displayedValue: number;
		textField: any;
		options: any;
		percentColors: any;
		getColorForValue(value: number, generateGradient: boolean): CanvasGradient;
		gp: any[];
		displayScale: number;
		minValue: number;
		maxValue: number;
	}
}
