import { Point, Size } from '@models/drawings/elements';

export abstract class DrawingHandler {
  abstract paint: (point: Point) => void;
  abstract initializeCanvas: (canvas: HTMLCanvasElement) => void;
  abstract resizeCanvas: (size: Size) => void;
}
