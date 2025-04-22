declare module 'gaugejs' {
    export class Gauge {
        constructor(canvas: HTMLCanvasElement, options?: any);
        canvas: HTMLCanvasElement;
        ctx: CanvasRenderingContext2D;
        paddingTop: number;
        availableHeight: number;
        radius: number;
        lineWidth: number;
        extraPadding: number;
        displayedValue: number;
        minValue: number;
        maxValue: number;
        options: any;
        textField: any;
        gp: any[];
        
        render(): void;
        getAngle(value: number): number;
        renderStaticLabels(staticLabels: any, w: number, h: number, radius: number): void;
        renderTicks(options: any, w: number, h: number, radius: number): void;
        getColorForValue(value: number, generateGradient: boolean): CanvasGradient;
    }
} 