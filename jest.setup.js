const { createCanvas } = require('canvas');

// Mock canvas
global.HTMLCanvasElement.prototype.getContext = function () {
  return createCanvas(100, 100).getContext('2d');
}; 