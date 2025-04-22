/* eslint-disable @typescript-eslint/no-explicit-any */
// Override Functions of Gauge.js library to show the label along with its unit
// Original Library Link
import { Gauge } from 'gaugeJS';
Gauge.render = function () {
	let displayedAngle: number,
		fillStyle: CanvasGradient,
		gauge: any,
		h: number,
		j: number,
		l: number,
		len: number,
		len1: number,
		max: number,
		min: number,
		radius: number,
		ref: any,
		ref1: any,
		scaleMutate: number,
		tmpRadius: number,
		w: number,
		zone: any;
	w = this.canvas.width / 2;
	h =
		this.canvas.height * this.paddingTop +
		this.availableHeight -
		(this.radius + this.lineWidth / 2) * this.extraPadding;
	displayedAngle = this.getAngle(this.displayedValue);
	if (this.textField) {
		this.textField.render(this);
	}
	this.ctx.lineCap = 'butt';
	radius = this.radius * this.options.radiusScale;
	if (this.options.staticLabels) {
		this.renderStaticLabels(this.options.staticLabels, w, h, radius);
	}
	if (this.options.staticZones) {
		this.ctx.save();
		this.ctx.translate(w, h);
		this.ctx.lineWidth = this.lineWidth;
		ref = this.options.staticZones;
		for (j = 0, len = ref.length; j < len; j++) {
			zone = ref[j];
			min = zone.min;
			if (this.options.limitMin && min < this.minValue) {
				min = this.minValue;
			}
			max = zone.max;
			if (this.options.limitMax && max > this.maxValue) {
				max = this.maxValue;
			}
			tmpRadius = this.radius * this.options.radiusScale;
			if (zone.height) {
				this.ctx.lineWidth = this.lineWidth * zone.height;
				scaleMutate = (this.lineWidth / 2) * (zone.offset || 1 - zone.height);
				tmpRadius = this.radius * this.options.radiusScale + scaleMutate;
			}
			this.ctx.strokeStyle = zone.strokeStyle;
			this.ctx.beginPath();
			this.ctx.arc(
				0,
				0,
				tmpRadius,
				this.getAngle(min),
				this.getAngle(max),
				false
			);
			this.ctx.stroke();
		}
	} else {
		if (this.options.customFillStyle !== void 0) {
			fillStyle = this.options.customFillStyle(this);
		} else if (this.percentColors !== null) {
			fillStyle = this.getColorForValue(
				this.displayedValue,
				this.options.generateGradient
			);
		} else if (this.options.colorStop !== void 0) {
			if (this.options.gradientType === 0) {
				fillStyle = this.ctx.createRadialGradient(w, h, 9, w, h, 70);
			} else {
				fillStyle = this.ctx.createLinearGradient(0, 0, w, 0);
			}
			fillStyle.addColorStop(0, this.options.colorStart);
			fillStyle.addColorStop(1, this.options.colorStop);
		} else {
			fillStyle = this.options.colorStart;
		}
		this.ctx.strokeStyle = fillStyle;
		this.ctx.beginPath();
		this.ctx.arc(
			w,
			h,
			radius,
			(1 + this.options.angle) * Math.PI,
			displayedAngle,
			false
		);
		this.ctx.lineWidth = this.lineWidth;
		this.ctx.stroke();
		this.ctx.strokeStyle = this.options.strokeColor;
		this.ctx.beginPath();
		this.ctx.arc(
			w,
			h,
			radius,
			displayedAngle,
			(2 - this.options.angle) * Math.PI,
			false
		);
		this.ctx.stroke();
		this.ctx.save();
		this.ctx.translate(w, h);
	}
	if (this.options.renderTicks) {
		this.renderTicks(this.options.renderTicks, w, h, radius);
	}
	this.ctx.restore();
	this.ctx.translate(w, h);
	ref1 = this.gp;
	for (l = 0, len1 = ref1.length; l < len1; l++) {
		gauge = ref1[l];
		gauge.update(true);
	}
	return this.ctx.translate(-w, -h);
};

Gauge.renderStaticLabels = function (
	staticLabels: any,
	w: number,
	h: number,
	radius: number
) {
	let font: string,
		fontsize: number,
		j: number,
		len: number,
		match: string,
		re: RegExp,
		ref: any,
		rest: string,
		rotationAngle: number,
		value: any;
	this.ctx.save();
	this.ctx.translate(w, h);
	font = staticLabels.font || '10px Times';
	re = /\d+\.?\d?/;
	match = font.match(re)![0];
	rest = font.slice(match.length);
	fontsize = parseFloat(match) * this.displayScale;
	this.ctx.font = fontsize + rest;
	this.ctx.fillStyle = staticLabels.color || '#000000';
	this.ctx.textBaseline = 'bottom';
	this.ctx.textAlign = 'center';
	ref = staticLabels.labels;
	for (j = 0, len = ref.length; j < len; j++) {
		value = ref[j];
		if (value.label !== void 0) {
			if (
				(!this.options.limitMin || value >= this.minValue) &&
				(!this.options.limitMax || value <= this.maxValue)
			) {
				font = value.font || staticLabels.font;
				match = font.match(re)![0];
				rest = font.slice(match.length);
				fontsize = parseFloat(match) * this.displayScale;
				this.ctx.font = fontsize + rest;
				rotationAngle = this.getAngle(value.label) - (3 * Math.PI) / 2;
				this.ctx.rotate(rotationAngle);
				this.ctx.fillText(
					formatNumber(value.label, staticLabels.fractionDigits) +
						' ' +
						staticLabels.unit,
					0,
					-radius - this.lineWidth / 2
				);
				this.ctx.rotate(-rotationAngle);
			}
		} else {
			if (
				(!this.options.limitMin || value >= this.minValue) &&
				(!this.options.limitMax || value <= this.maxValue)
			) {
				rotationAngle = this.getAngle(value) - (3 * Math.PI) / 2;
				this.ctx.rotate(rotationAngle);
				this.ctx.fillText(
					formatNumber(value, staticLabels.fractionDigits) +
						' ' +
						staticLabels.unit,
					0,
					-radius - this.lineWidth / 2
				);
				this.ctx.rotate(-rotationAngle);
			}
		}
	}
	return this.ctx.restore();
};

const formatNumber = function (...num: any[]) {
	let digits: number, value: number;
	value = num[0];
	digits = num[1] || 0;
	try {
		return addCommas(value.toFixed(digits));
	} catch (error) {
		console.error(error);
		return addCommas(value.toString());
	}
};

const addCommas = function (nStr: string) {
	let rgx: RegExp, x: string[], x1: string, x2: string;
	nStr += '';
	x = nStr.split('.');
	x1 = x[0];
	x2 = '';
	if (x.length > 1) {
		x2 = '.' + x[1];
	}
	rgx = /(\d+)(\d{3})/;
	while (rgx.test(x1)) {
		x1 = x1.replace(rgx, '$1' + ',' + '$2');
	}
	return x1 + x2;
};

export default Gauge;
