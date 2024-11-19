// setupTests.ts

import '@testing-library/jest-dom';
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
