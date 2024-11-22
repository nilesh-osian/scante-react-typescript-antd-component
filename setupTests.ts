// setupTests.ts

import '@testing-library/jest-dom';
globalThis.Gauge = class Gauge {
	constructor() {
		// No-op
	}
	setOptions() {
		// No-op
	}
	set() {
		// No-op
	}
};
globalThis.ResizeObserver = class ResizeObserver {
	observe() {
		// No-op
	}
	unobserve() {
		// No-op
	}
	disconnect() {
		// No-op
	}
};
