import { Point, Size } from '@models/drawings/elements';
import { LineSettings } from '@models/drawings/settings';
import { DrawingHandler } from './abstract/drawingHandler';

export class DrawingService implements DrawingHandler {
  private canvas: HTMLCanvasElement | null = null;
  private context: CanvasRenderingContext2D | null = null;

  private readonly lineSettings: LineSettings = new LineSettings(
    'round',
    'round',
    10,
    100
  )

  private readonly canvasSize: Size = {
    width: 500,
    height: 500
  }

  private currentX = Infinity;
  private currentY = Infinity;
  private colorHue = 0;
  private backgroundColor = 'white';
  private contextSelector = '2d';

  initializeCanvas(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.resizeCanvas(this.canvasSize);

    var contextValue = this.canvas.getContext(this.contextSelector);

    if (contextValue == null) {
      const message =
        `${this.contextSelector} context is not defined in the canvas`;
      throw new Error(message);
    }

    this.context = contextValue! as CanvasRenderingContext2D;
    this.context.fillStyle = this.backgroundColor;
    this.context.fill();
    this.context.lineJoin = this.lineSettings.lineJoin;
    this.context.lineCap = this.lineSettings.lineCap;
    this.context.lineWidth = this.lineSettings.lineWidth;
  }

  resizeCanvas(size: Size) {
    if (this.canvas == null) {
      throw new Error('Canvas is not initialized.');
    }

    this.canvas!.width = size.width;
    this.canvas!.height = size.height;
  };

  paint(point: Point) {
    this.checkIsInitialized();

    this.context!.strokeStyle = this.getStrokeStyle();
    this.context!.beginPath();

    const xDistance = Math.abs(this.currentX - point.x);
    const yDistance = Math.abs(this.currentY - point.y);

    const isInPrecisionX = xDistance < this.lineSettings.movePrecision;
    const isInPrecisionY = yDistance < this.lineSettings.movePrecision;

    if (isInPrecisionX && isInPrecisionY) {
      this.context!.moveTo(this.currentX, this.currentY);
    }

    this.context!.lineTo(point.x, point.y);
    this.context!.stroke();

    this.currentX = point.x;
    this.currentY = point.y
    this.colorHue++;
  }

  checkIsInitialized() {
    if (this.canvas == null || this.context == null) {
      throw new Error('Drawing service is not initialized.');
    }
  }

  private getStrokeStyle =
    (): string => `hsl(${this.colorHue}, 100%, 60%)`;

  private getCanvasSize(canvas: HTMLCanvasElement) {
    if (canvas == null) {
      throw new Error('Canvas is not initialized.')
    }

    const canvasSize: Size = {
      width: this.canvas!.offsetWidth,
      height: this.canvas!.offsetHeight
    }

    return canvasSize;
  }
}
