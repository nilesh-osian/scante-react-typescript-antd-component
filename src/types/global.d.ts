/* eslint-disable @typescript-eslint/no-explicit-any */
declare global {
	interface Window {
		Gauge: {
			prototype: {
				render: () => void;
				renderStaticLabels: (
					labels: any,
					w: number,
					h: number,
					radius: number
				) => void;
			};
			new (): typeof window.Gauge.prototype;
		};
	}

	var Gauge: typeof window.Gauge;
}

// Add `Gauge` as a global variable to avoid TypeScript errors
declare var Gauge: typeof window.Gauge;
